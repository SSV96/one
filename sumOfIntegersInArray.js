function sumOfIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
        sum += arr[i];
      } else {
        throw new Error('Array should only contain integers.');
      }
    }
    return sum;
  }
  

  const myArray = [1, 2, 3, 4, 5];
  const result = sumOfIntegers(myArray);
  console.log(result); // Output: 15
  