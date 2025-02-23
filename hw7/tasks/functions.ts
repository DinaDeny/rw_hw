const arr1 = [23, 24, 28, 37, 40];
const arr2 = ['Jane', 'Ann', 'Alice', 'Dona', 'Mop'];


function sum(array: number[] ): number  {
    return array.reduce((a, b) => a + b, 0);
};

function stringConcat(array: string[] ): string {
    return array.reduce((a, b) => a + b, '');
};

console.log(sum(arr1));
console.log(stringConcat(arr2));
