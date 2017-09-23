const fs = require('fs');
const frontMatter = require('front-matter');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) results = results.concat(walk(filePath));
    else results.push(filePath);
  });
  return results;
};

function processMds() {
  const files = walk('./src/data/md');
  const output = {};
  files.forEach((file) => {
    const source = fs.readFileSync(file).toString();
    const fm = frontMatter(source);
    fm.attributes.path = file
      .split('/')
      .slice(4)
      .join('/');
    fm.attributes.type = fm.attributes.path.split('s/')[0];
    output[fm.attributes.url] = fm.attributes;
    delete output[fm.attributes.url].url;
  });
  return {
    code: `module.exports = ${JSON.stringify(output)};`,
    cacheable: true,
    dependencies: files,
  };
}

module.exports = processMds;
