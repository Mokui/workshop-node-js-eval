//return (a number) which is the sum of the values written in the path given in input.
var fs = require('fs');

exports.run = function(input) {
  var size = 0;

  var path = fs.readFileSync(input);
  // console.log(path.toString());
    var dot = path.toString();
    // console.log(dot.toString());

    for (var i = 0; i < dot.length; i++) {
      size += Number(dot[i]);
    }
    // console.log(size);

  return size;

};
