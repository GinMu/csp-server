/**
 * BalanceController
 *
 * @description :: 生成井通钱包
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const jtWallet = require('jcc_wallet/lib/jingtum');

module.exports = {
  /**
   * @param req request
   * @param res responses
   * @description :: 生成井通钱包
   */
  generate: function(req, res) {
    try {
      let wallet = jtWallet.createWallet();
      return res.feedback(ResultCode.OK_GENERATE.code, wallet, ResultCode.OK_GENERATE.msg)
    } catch (error) {
      sails.log.error(Constant.ROUTER_GENERATE + error);
      return res.feedback(ResultCode.ERR_GENERATE.code, {}, ResultCode.ERR_GENERATE.msg);
    }
  }
};