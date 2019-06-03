/** @fileOverview Javascript cryptography implementation.
 *
 * Crush to remove comments, shorten variable names and
 * generally reduce transmission size.
 *
 * @author xdjiang
 * @author xdjiang
 * @author xdjiang
 */

module.exports = {

  OK_GENERATE: {
    code: '0',
    msg: '钱包创建成功'
  },
  ERR_GENERATE: {
    code: '2001',
    msg: '钱包创建失败'
  },
  OK_SIGN: {
    code: '0',
    msg: '签名成功'
  },
  ERR_SIGN: {
    code: '2001',
    msg: '签名失败'
  },
  ERR_ADDRESS_INVALID: {
    code: '3001',
    msg: '钱包地址非法'
  },
  ERR_SECRET_INVALID: {
    code: '3002',
    msg: '钱包秘钥非法'
  },
  ERR_CURRENCY_INVALID: {
    code: '3003',
    msg: '代币非法'
  },
  ERR_AMOUNT_INVALID: {
    code: '3004',
    msg: '数量格式错误'
  },
  ERR_ISSUER_INVALID: {
    code: '3005',
    msg: '发行方钱包地址非法'
  },
  ERR_SEQUENCE_INVALID: {
    code: '3006',
    msg: '序列号非法'
  },
  ERR_MEMO_INVALID: {
    code: '3007',
    msg: '备注过长'
  }
};