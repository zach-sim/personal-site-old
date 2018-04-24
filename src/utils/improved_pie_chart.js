import { pieChart } from 'dc';

module.exports = () => {
  const func = pieChart.toString().split('return labelPosition(d, arc)');
  let outputFunc = pieChart.toString();
  if (func.length === 2) {
    outputFunc = func.join(`
      var rotation = ((((d.startAngle + d.endAngle) / 2) * 180) / Math.PI) - 90;
      var correction = rotation > 90 ? 180 : 0;
      return labelPosition(d, arc) + "rotate("+rotation+") rotate(-"+correction+")";
    `);
  }

  return {
    code: `module.exports = ${outputFunc};`,
    cacheable: true,
  };
};
