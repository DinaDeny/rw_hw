const arr1 = [1, 2, 3, 4, 5, 11];
const arr2 = ['green', 'yellow', 'grey', 'brown'];
const arr3 = [true, false];
const arr4 = ['one', 34, false];

const filteredArray = arr1.filter((item)=>{
  if (item % 2 === 0) {
    return true;
  }
  return false;
});
console.log(filteredArray);

const foundElement = arr4.find((item) => {
  if (typeof item === 'string') {
    return true;
  }
  return false;
});
console.log(foundElement);

const sortedArray = arr2.sort();
console.log(sortedArray);

const concatedArray = arr3.concat(arr4);
console.log(concatedArray);

const isGreenExists = arr2.includes('green');
console.log(isGreenExists);

const colorsString = arr2.join('5');
console.log(colorsString);

arr1.forEach((item) => {
  console.log(item);
});

const mappedArray = arr2.map((item) => {
  return item.toUpperCase();
});
console.log(mappedArray);


