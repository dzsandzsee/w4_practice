/* function helloWorld () {
    console.log("hello world")
}

helloWorld()

const coolerHelloWorld = function() {
    console.log("hello world from the cooler functions")
}


coolerHelloWorld()

const coolestHelloWorld = () => {
    console.log("hello world from the arrow function")
}
coolestHelloWorld() */

function sumOfTwoNumbers (number1, number2) {
    return number1 + number2
}
function multiplyTwoNumbers(number1, number2) {
    return number1 + 10
}
/* const result = sumOfTwoNumbers(1, 2)
console.log(result) */

//console.log(sumOfTwoNumbers(20, 3));

/* const arrowSumOfTwoNumbers = (number1, number2) => number1 + number2



console.log(arrowSumOfTwoNumbers(1, 4)) */

function doSomeMagic(number1, number2, callback) {
    return callback(number1, number2)
}
console.log(doSomeMagic(1, 2, multiplyTwoNumbers))