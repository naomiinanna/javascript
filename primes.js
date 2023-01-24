let isPrime = true;
let checkedNumber = 2;

while(checkedNumber < 30) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
        if(checkedNumber % j == 0) {
            isPrime = false;
            break;
        }        
    }
    if(isPrime == true) {
        console.log(checkedNumber);
    }
    checkedNumber++;
}