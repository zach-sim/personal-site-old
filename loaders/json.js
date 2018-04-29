/* eslint-disable */

module.exports = function json_loader(source) {
  this.cacheable && this.cacheable();
  const value = typeof source === "string" ? JSON.parse(source) : source;
  this.value = [value];

  const compressed = require('pako').deflate(JSON.stringify(value), { to: 'string' });
  return "module.exports = JSON.parse(require('pako/lib/inflate').inflate(atob(\"" + require('btoa')(compressed) + "\"), { to: 'string' }));";
}
