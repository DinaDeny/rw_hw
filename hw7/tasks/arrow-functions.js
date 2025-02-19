var numberArray = [23, 24, 28, 37, 40];
var stringArray = ['Jane', 'Ann', 'Alice', 'Dona', 'Mop'];
var sumArrow = function (array) {
    return array.reduce(function (a, b) { return a + b; }, 0);
};
var stringConcatArrow = function (array) {
    return array.reduce(function (a, b) { return a + b; }, '');
};
console.log(sumArrow(numberArray));
console.log(stringConcatArrow(stringArray));
