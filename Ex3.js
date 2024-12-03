const numbers = [0, 5, 0, -2, 3, 0, 7, 0, 9, 0, 0, 0, 10, 0, 0, 200]; //arry of nums

const zeroCount = numbers.reduce(
  (count, num) => count + (num === 0 ? 1 : 0),
  0
);

console.log(`amount of zeros in the arr: ${zeroCount}`);
