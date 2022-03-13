//1.Write the following program
// Generates 10 Random 3 Digit Number
//Stores this randomm number into an array
//Finding the 2nd largest and 2nd smallest element without sorting array

function getThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900 + 100);
  }
  // array
  let arrayOfElements = new Array();
  let findLargestAndSmallest = () => {
    //getting arrray elements
    for (let i = 0; i < 10; i++) arrayOfElements[i] = getThreeDigitRandomNumber();
    console.log("The Ten 3 digits numbers are: " + arrayOfElements.toString());
  
    let firstLargest = 0,
      secondlargest = 0;
    let firstSmallest = 1000,
      secondSmallest = 1000;
    for (let i = 0; i < arrayOfElements.length; i++) {
      if (arrayOfElements[i] > firstLargest) {
        secondlargest = firstLargest;
        firstLargest = arrayOfElements[i];
      } else if (
        arrayOfElements[i] > secondlargest &&
        arrayOfElements[i] != firstLargest
      )
        secondlargest = arrayOfElements[i];
    }
    for (let i = 0; i < arrayOfElements.length; i++) {
      if (arrayOfElements[i] < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = arrayOfElements[i];
      } else if (
        arrayOfElements[i] < secondSmallest &&
        arrayOfElements[i] != firstSmallest
      )
        secondSmallest = arrayOfElements[i];
    }
    console.log("first largest: " + firstLargest);
    console.log("first smallest: " + firstSmallest);
    console.log("second smallest: " + secondSmallest);
    console.log("second largest: " + secondlargest);
  };
  findLargestAndSmallest();

  // 2. Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
let numArray = new Array();
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 900) + 100;
  numArray.push(num);
}
console.log("Sorted Array: ");
console.log(numArray.sort());
console.log("Second largest after sorting : " + numArray.slice(-2, -1));
console.log("Second smallest after sorting : " + numArray[1]);

let maxNum1 = 0;
minNum1 = 1000;
let maxNum2 = 0;
minNum2 = 1000;
for (let element of numArray) {
  maxNum1 = Math.max(element, maxNum1);
  minNum1 = Math.min(element, minNum1);
}
for (let element of numArray) {
  maxNum2 = element < maxNum1 && element > maxNum2 ? element : maxNum2;
  minNum2 = element > minNum1 && element < minNum2 ? element : minNum2;
}
console.log("Second largest without sorting : " + maxNum2);
console.log("Second smallest without sorting : " + minNum2);

// 3. Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output
function getPrimeFactors(number) {
    let array = new Array();
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        let count = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j == 0) count++;
        }
        if (count == 0 && i > 1) array.push(i);
      }
    }
    return array;
  }
  let number = Math.floor(Math.random() * 1000);
  console.log("Prime Factors of " + number + " are : ");
  console.log(getPrimeFactors(number));

  // 5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
  function isRepeated(number) {
    if (number % 11 == 0) return true;
    else return false;
  }
  
  let array = new Array();
  for (let i = 1; i < 100; i++) {
    if (isRepeated(i)) array.push(i);
  }
  console.log(array);
