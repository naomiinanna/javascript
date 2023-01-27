//ONE
function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(addTwoNumbers(2, 3));


//TWO
function countVowels(string) {
    let count = 0;
    let vowels = 'aeiou';
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(string.charAt(i) == vowels.charAt(j)) {
                count++;
            }
        }
    }
    return count;
}
console.log(countVowels("aaaaaaa"));

//THREE
function raiseNumberByPower3(number) {
    return Math.pow(number, 3);
}
console.log(raiseNumberByPower3(5));

//4
function numberIsEven(number) {
    return number % 2 == 0;
}
console.log(numberIsEven(8));

//5
function reverseString(string) {
    let newString = "";
    for (let i = string.length; i >=0; i--) {
        newString = newString + string.charAt(i);
    }
    return newString;
}
console.log(reverseString("heellooo"));

//6
function multiplyNumbers(numberOne, numberTwo) {
    let result = 0;
    for (let i = 0; i < numberTwo; i++) {
        result += numberOne;
    }
    return result;
}
console.log(multiplyNumbers(2, 4));

//7
function sumOfAllNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += +numbers.charAt(i);
    }
    return sum;
}
console.log(sumOfAllNumbers("1234"));

//8
function findSquareRoot(number) {
    return Math.sqrt(number);
}
console.log(findSquareRoot(9));

//9
function isPalindrome(string) {
    let palindrome = true;
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) != string.charAt(string.length -1 - i)) {
            return false;
        }
    }
    return palindrome;
}
console.log(isPalindrome("otto"));

//10
function factorialOfNumber(number) {
    let factorialNumber = 1;
    let result = 1;
    while(factorialNumber <=  number) {
        result *= factorialNumber;
        factorialNumber++;
    }
    return result;
}
console.log(factorialOfNumber(5));

//11
function fibonacciOf(number) {
    if(number == 0) {
        return 0;
    }else if(number == 1) {
        return 1;
    }else{
        return fibonacciOf(number -1) + fibonacciOf(number-2);
    }
}
console.log(fibonacciOf(4));

//12
function factorialOfNumberRecursive(number) {
    if(number >= 1) {
        return number * factorialOfNumberRecursive(number -1 );
    }else{
        return 1;
    }
}
console.log(factorialOfNumberRecursive(5));

//13
function callFunction(number, method) {
    return fun(number*2);
}

function fun(number) {
    return "i was called and the number is " + number;
}
console.log(callFunction(4, fun));


//HARD TASKS
//2
function raiseNumberByPowerOf(number) {

}

//3
function callMe(number, method) {
    return 
}