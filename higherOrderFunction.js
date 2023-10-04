5-
function powerOfTwoForLoop(inputArray) {
    let resultArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        resultArray.push(Math.pow(2, inputArray[i]));
    }
    return resultArray;
}


function powerOfTwoForEach(inputArray) {
    let resultArray = [];
    inputArray.forEach(function(element) {
        resultArray.push(Math.pow(2, element));
    });
    return resultArray;
}


function powerOfTwoMap(inputArray) {
    return inputArray.map(function(element) {
        return Math.pow(2, element);
    });
}


const inputArray = [1, 2, 3];

console.log("Using for loop:", powerOfTwoForLoop(inputArray));
console.log("Using forEach:", powerOfTwoForEach(inputArray));
console.log("Using map:", powerOfTwoMap(inputArray));

-6
function classifyNumbers(inputArray) {
    return inputArray.map(function(element) {
        if (typeof element === 'number' && !isNaN(element)) {
            return element % 2 === 0 ? 'even' : 'odd';
        } else {
            return 'N/A';
        }
    });
}


const inputArray = [1, 2, 3, "jojo"];
console.log(classifyNumbers(inputArray));  

7-
function fizzbuzz(inputArray) {
    return inputArray.map(function(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Fizz Buzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
    });
}


const inputArray = [1, 2, 3, 5, 15, 7];
const outputArray = fizzbuzz(inputArray);
console.log(outputArray);