/**
 * BalanceController
 *
 * @description :: 转账签名
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const jtWallet = require('jcc_wallet/lib/jingtum');
const isCurrency = require('jcc_jingtum_lib/lib/DataCheck').isCurrency;
const localSign = require('jcc_jingtum_lib/src/local_sign');
const formatTransfer = require('jcc_exchange/lib/tx').formatTransfer;

module.exports = {
  /**
   * @param req request
   * @param res responses
   * @description :: 转账签名
   */
  sign: function(req, res) {

    let address = req.param('address');

    let to = req.body.to;
    let secret = req.body.secret;
    let amount = parseFloat(req.body.amount);
    let issuer = req.body.issuer;
    let sequence = parseFloat(req.body.sequence);
    let memo = req.body.memo ? req.body.memo : "";
    let currency = req.body.currency;

    if (!jtWallet.isValidAddress(address) || !jtWallet.isValidAddress(to)) {
      return res.feedback(ResultCode.ERR_ADDRESS_INVALID.code, {}, ResultCode.ERR_ADDRESS_INVALID.msg);
    }

    if (!jtWallet.isValidAddress(issuer)) {
      return res.feedback(ResultCode.ERR_ISSUER_INVALID.code, {}, ResultCode.ERR_ISSUER_INVALID.msg);
    }

    if (!jtWallet.isValidSecret(secret)) {
      return res.feedback(ResultCode.ERR_SECRET_INVALID.code, {}, ResultCode.ERR_SECRET_INVALID.msg);
    }

    if (!isCurrency(currency)) {
      return res.feedback(ResultCode.ERR_CURRENCY_INVALID.code, {}, ResultCode.ERR_CURRENCY_INVALID.msg);
    }

    if (Number.isNaN(amount) || amount <= 0) {
      return res.feedback(ResultCode.ERR_AMOUNT_INVALID.code, {}, ResultCode.ERR_AMOUNT_INVALID.msg);
    }

    if (!Number.isInteger(sequence) || sequence < 0) {
      return res.feedback(ResultCode.ERR_SEQUENCE_INVALID.code, {}, ResultCode.ERR_SEQUENCE_INVALID.msg);
    }

    if (memo.length > 512) {
      return res.feedback(ResultCode.ERR_MEMO_INVALID.code, {}, ResultCode.ERR_MEMO_INVALID.msg);
    }

    try {
      let tx = formatTransfer(currency, amount, address, to, issuer, memo);
      tx.Sequence = sequence;
      let sign = localSign(tx, {
        seed: secret
      });
      return res.feedback(ResultCode.OK_SIGN.code, { signature: sign }, ResultCode.OK_SIGN.msg);
    } catch (error) {
      sails.log.error(Constant.ROUTER_PAYMENT_SIGN + error);
      return res.feedback(ResultCode.ERR_SIGN.code, {}, ResultCode.ERR_SIGN.msg + ": " + error.message);
    }
  }
};