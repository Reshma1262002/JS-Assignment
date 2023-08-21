const numbers = [1, -2, 3, -4, 5];
function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const result = sumPositiveNumbers(numbers);
console.log(result);