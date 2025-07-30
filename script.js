function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// Test:
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("js is fun")); // "Js Is Fun"

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  // Add remaining items
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

// Test:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1,2,3,4,5,6]

function filterArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test:
console.log(filterArray([1, 2, 3, 4], (x) => x % 2 === 0)); // [2, 4]

function mapArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Test:
console.log(mapArray([1, 2, 3], (x) => x * 2)); // [2, 4, 6]

function reduceArray(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Test:
console.log(reduceArray([1, 2, 3], (acc, val) => acc + val, 0)); // 6

function forEachArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Test:
forEachArray([1, 2, 3], (val, idx) => {
  console.log(`Index ${idx}: ${val}`);
});

function findMax(arr) {
  return Math.max(...arr);
}

// Test:
console.log(findMax([1, 9, 3, 7])); // 9

function mergeObjects(obj1, obj2) {
  const result = { ...obj1, ...obj2 };
  return result;
}

// Test:
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// Output: { a: 1, b: 3, c: 4 }

function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
}

// Test:
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Output: { '1': 'a', '2': 'b', '3': 'c' }

function omitKeys(obj, keysToOmit) {
  const result = {};
  for (let key in obj) {
    if (!keysToOmit.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// Test:
console.log(omitKeys({ a: 1, b: 2, c: 3, d: 4 }, ["b", "d"]));
// Output: { a: 1, c: 3 }

function pickKeys(obj, keysToPick) {
  const result = {};
  for (let key of keysToPick) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

// Test:
console.log(pickKeys({ a: 1, b: 2, c: 3, d: 4 }, ["b", "d"]));
// Output: { b: 2, d: 4 }

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Test:
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) count++;
  }
  return count;
}

// Test:
console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 3
