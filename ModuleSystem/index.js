
//MODULE WRAPPER Node.Js by default wrap everything written in the file
//(function(exports,module,require, __dirname,__filename) {
  const fruits = ["Mango", "Apple", "Hello", "India"];

  function addition(a, b) {
    return a + b;
  }

  module.exports = {
    fruits,
    addition
  };
  // return module  // invisible node.js do that
//})();
