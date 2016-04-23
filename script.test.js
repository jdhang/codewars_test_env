var tests = [
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732]
];

describe('Evaluate Math Expressions', function () {
  tests.forEach(function (test) {
    it('should evaluate ' + test[0] + ' to ' + test[1], function () {
      expect(calc(test[0])).to.eql(test[1]);
    });
  })

})
