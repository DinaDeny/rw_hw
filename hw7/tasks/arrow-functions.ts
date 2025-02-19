const numberArray = [23, 24, 28, 37, 40];
const stringArray = ['Jane', 'Ann', 'Alice', 'Dona', 'Mop'];

const sumArrow = (array: number[] ): number => {
    return array.reduce((a, b) => a + b, 0);
};

const stringConcatArrow = (array: string[]): string => {
    return array.reduce((a, b) => a + b, '');
};

console.log(sumArrow(numberArray));
console.log(stringConcatArrow(stringArray));
