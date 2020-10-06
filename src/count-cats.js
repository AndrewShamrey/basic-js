const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard/* matrix */) {
  // throw new CustomError('Not implemented');

    let numOfSubArr = backyard.length - 1;
    let cats = 0;
    for (let i = 0; i <= numOfSubArr; i += 1) {
      let numOfElements = backyard[i].length - 1;
      for (let j = 0; j <= numOfElements; j += 1) {
        if (backyard[i][j] === '^^') {
          cats += 1;
        }
      }
    }
    
    return cats;
  // remove line with error and write your code here
};
