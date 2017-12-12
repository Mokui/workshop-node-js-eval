//return (a number) which is the result of the values of objects
//with specific operator mentionned in the property "operator".
// For example +2-4+3=1
// run([
//   { operator: 'add', value: 2 },
//   { operator: 'substract', value: 4 },
//   { operator: 'add', value: 3 }
// ]) // 1
exports.run = function(run) {
  var val = 0;
  for (var i = 0; i < run.length; i++) {
    if(run[i].operator === "add"){
        val += run[i].value;
    }
    if(run[i].operator === "substract"){
        val -= run[i].value;
    }
  }
  return val;
};
