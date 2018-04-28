/* eslint-disable */

module.exports = function json_loader(source) {
  this.cacheable && this.cacheable();
  const value = typeof source === "string" ? JSON.parse(source) : source;
  this.value = [value];

  const msgpackBuffer = require('msgpack-lite').encode(value);
  const compressed = require('pako').deflate(msgpackBuffer, { to: 'string' });
  return "module.exports = require('msgpack-lite').decode(require('pako').inflate(atob(\"" + require('btoa')(compressed) + "\")));";
}
