var fs = require("fs");
var frontMatter = require("front-matter");

var walk = function(dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + "/" + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else results.push(file);
  });
  return results;
};

function process_mds() {
  const files = walk("./src/data/md");
  var output = {};
  files.forEach(file => {
    var source = fs.readFileSync(file).toString();
    var fm = frontMatter(source);
    fm.attributes.path = file
      .split("/")
      .slice(4)
      .join("/");
    fm.attributes.type = fm.attributes.path.split("s/")[0];
    output[fm.attributes.url] = fm.attributes;
    delete output[fm.attributes.url].url;
  });
  return {
    code: `module.exports = ${JSON.stringify(output)};`,
    cacheable: true,
    dependencies: files
  };
}

module.exports = process_mds;
