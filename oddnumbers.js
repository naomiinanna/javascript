let timesOddNumber = 10;
for (let oddNumber = 0; timesOddNumber; oddNumber++) {
    if(oddNumber % 2 != 0) {
        console.log("Odd Number: " + oddNumber);
        timesOddNumber--;
    }
}
