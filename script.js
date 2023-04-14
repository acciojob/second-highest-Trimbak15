//your JS code here. If required.
function findSecondHighestElement(arr) {
  // Initialize the maximum and second maximum values
  let max = -Infinity;
  let secondMax = -Infinity;

  // Iterate through the array and update the maximum and second maximum values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }

  // Return the second maximum value
  return secondMax;
}

// Test the function with an example array
let arr = [10, 5, 8, 20, 9];
let secondHighest = findSecondHighestElement(arr);

// Output the result
console.log("The second highest element in the array is: " + secondHighest);
