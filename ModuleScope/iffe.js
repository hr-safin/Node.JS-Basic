(function(){
    const superHero = "SpiderMan"
    console.log(superHero)
})();

(function(){
    const superHero = "batman"
    console.log(superHero)
})();


// The module wrapper applied by Node.js
(function (exports, require, module, __filename, __dirname) {
    // Module code (your code) goes here
    const superHero = "SpiderMan";
    console.log(superHero);
  });