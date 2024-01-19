(function(){
    const superHero = "SpiderMan"
    console.log(superHero)
})();

(function(){
    const superHero = "batman"
    console.log(superHero)
})();


// Your module code
const superHero = "SpiderMan";
console.log(superHero);

// The Node.js module wrapper applied automatically
(function (exports, require, module, __filename, __dirname) {
  // Your module code goes here
  const superHero = "SpiderMan";
  console.log(superHero);
});

  console.log(__filename)
  console.log(__dirname)