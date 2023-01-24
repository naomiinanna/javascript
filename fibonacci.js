let fibOne = 0;
let fibTwo = 1;
let fibNew = 0;
for (let i = 0; i <= 10; i++) {
    if(i == 0) {
        console.log(fibOne);
    }
    else if(i == 1) {
        console.log(fibOne + fibTwo);
    }
    else if(i > 1) {
        console.log(fibOne + fibTwo);
        fibNew = fibOne + fibTwo;
        fibOne = fibTwo;
        fibTwo = fibNew
    }
}