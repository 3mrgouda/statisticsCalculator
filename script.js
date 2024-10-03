const inputNumbers = document.getElementById("numbers");
const btnSubmit = document.getElementById("btnSubmit");
const meanText = document.getElementById("mean");
const medianText = document.getElementById("median");
const modeText = document.getElementById("mode");
const rangeText = document.getElementById("range");
const varianceText = document.getElementById("variance");
const SDText = document.getElementById("standardDeviation");

const calculate = (event) => {
  event.preventDefault();
  const numbers = inputNumbers.value.split(",").map((number) => Number(number));
  if (numbers == "NaN") {
    window.alert("Please enter a valid number");
  } else {
    meanText.innerText = Mean(numbers);
    medianText.innerText = Median(numbers);
    modeText.innerText = Mode(numbers);
    rangeText.innerText = rangeOfNumbers(numbers);
    varianceText.innerText = Variance(numbers);
    SDText.innerText = standardDeviation(numbers);
  }
};

function Mean(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const meanValue = sum / numbers.length;
  return meanValue;
}

function bubbleSort(numbers = []) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

function Median(numbers) {
  bubbleSort(numbers);
  if(numbers.length % 2 == 0){
    return `${numbers[numbers.length / 2 - 1]},${numbers[numbers.length / 2]}`
  }else{
    return numbers[(numbers.length - 1) / 2];
  }
}

function Mode(numbers) {
  const count = {};
  let maxCount = 0;
  let mostFrequency = null;

  for (const num of numbers) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
      maxCount = count[num];
      mostFrequency = num;
    }
  }
  return mostFrequency;
}

function rangeOfNumbers(numbers) {
  const array = bubbleSort(numbers);
  const largestNumber = array[array.length - 1];
  const smallestNumber = array[0];
  return largestNumber - smallestNumber;
}

function Variance(numbers) {
  const array = [];
  for (const num of numbers) {
    const squareDifference = Math.pow(num - Mean(numbers), 2);
    array.push(squareDifference);
  }
  return Mean(array);
}

function standardDeviation(numbers) {
  return Math.sqrt(Variance(numbers)).toFixed(2);
}
btnSubmit.addEventListener("click", calculate);
