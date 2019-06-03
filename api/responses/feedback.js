/**
 * 200 (Feedback) Response
 *
 * Usage:
 * return res.feedback(success, data, msg);
 *
 * @param  {code} code
 * @param  {Object} data
 * @param  {String} msg
 *
 */

module.exports = function feedback(code, dataObj, msg) {
  var res = this.res;
  var body;
  body = { 'code': code, 'data': dataObj, 'msg': msg };

  res.json(200, body);
};