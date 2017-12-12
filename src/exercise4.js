//return a particular string :
//"The value of One is 1, The value of Two is 2,
// The value of Three is 3".
exports.run = function(input) {

  var myFunction = () =>{
    return "The value of "+input.argv[2][1]+" is "+input.argv[1][1]+", The value of "+input.argv[2][2]+" is "+input.argv[1][2]+", The value of "+input.argv[2][3]+" is "+input.argv[1][3]+""
  }

  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(myFunction, [1, 2, 3], ["One", "Two", "Three"]);
  /** */
};
