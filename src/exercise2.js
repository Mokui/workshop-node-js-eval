//return a string with only number under 6 of the string given in input.
exports.run = function(input) {
  var tab = [];
  var res = [];
  tab = input.split("");
  for (var i=0; i<input.length ; i++) {
    if (tab[i] < 6) {
      res.push(tab[i]);
    }
  }
  return res.join('');
};
