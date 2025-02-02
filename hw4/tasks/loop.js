for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let j = 100; j >= 0; j = j-10) {
  console.log(j);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 100;
while (j >= 0) {
  console.log(j);
  j = j - 10;
}

let k = 0;
do {
  console.log(k);
  k++;
}
while (k < 10);

let a = 100;
do {
  console.log(a);
  a = a - 10;
}
while (a >= 0);

const arr1 = ['green', 'yellow', 'pink', 'blue', 'black'];

for (const color of arr1) {
  console.log(color);
}

for (const color in arr1) {
  console.log(arr1[color]);
}
