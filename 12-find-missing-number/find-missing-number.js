//
//

// ------------------------------------
// Method 1: Sum formula (Gauss) + Reduce || for loop

const findMissingNumber = (arr) => {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  // formula for sum of the numbers from 1 to n (inclusive) (refer to readme)
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  // ---OR using -Reduce- instead of -for loop-
  //   const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
};

// ------------------------------------
// Method 2: Sort + for loop
const findMissingNumber2 = (arr) => {
  // Copy first, then sort (sort mutates)
  const sortedArr = [...arr].sort((a, b) => a - b);

  // Assumes array is 1 to n inclusive with one missing
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== i + 1) {
      return i + 1;
    }
  }

  // If no gap found, missing number is the last one
  return sortedArr.length + 1;
};

// ------------------------------------

// Upgraded Challenge: findMissingNumber
// Write a function called findMissingNumber that takes in an array of unique numbers. The array contains consecutive numbers (in order doesn't matter), but one number is missing. The array may or may not start from 1. Return the missing number.

// findMissingNumber([1, 2, 3, 4, 6]);       // 5 (starts from 1)
// findMissingNumber([4, 5, 6, 8]);          // 7 (starts from 4)
// findMissingNumber([10, 12, 13, 14]);      // 11 (starts from 10)
// findMissingNumber([100, 101, 103, 104]);  // 102 (starts from 100)

// Method 3: Find min/max + sum formula (mathematical)
const findMissingNumber3 = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Sum from min to max (inclusive)
  const expectedSum = ((min + max) * (max - min + 1)) / 2;

  // Sum of actual array
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
};

// Method 4: Set + loop from min to max
const findMissingNumber4 = (arr) => {
  const numSet = new Set(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) return i;
  }
};

const result = findMissingNumber4([1, 2, 3, 4, 6, 7, 8, 9, 10]);
console.log(result);
