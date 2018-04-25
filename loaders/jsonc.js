module.exports = function zipsonLoader(source) {
  this.cacheable && this.cacheable();
  const value = typeof source === "string" ? JSON.parse(source) : source;
  this.value = [value];
  return `module.exports = require('jsoncomp').decompress("${require('jsoncomp').compress(value)}");`;
};
