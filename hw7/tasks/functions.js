var arr1 = [23, 24, 28, 37, 40];
var arr2 = ['Jane', 'Ann', 'Alice', 'Dona', 'Mop'];
function sum(array) {
    return array.reduce(function (a, b) { return a + b; }, 0);
}
;
function stringConcat(array) {
    return array.reduce(function (a, b) { return a + b; }, '');
}
;
console.log(sum(arr1));
console.log(stringConcat(arr2));
