// NUMBERS FROM 1-10 FOR LOOP
for (let j = 1; j <= 10; j++) {
    console.log(j);
}

//NUMBERS FROM 1-10 WHILE LOOP
let i = 10;
while(i > 1) {
    i--;
    console.log(i);
}

//First 10 EVEN NUMBERS
let timesEvenNumber = 10
for (let evenNumber = 2; timesEvenNumber; evenNumber++) {
    if(evenNumber % 2 == 0) {
        console.log("Even Number: " + evenNumber);
        evenNumber++;
        timesEvenNumber--;
    }else{
        evenNumber++;
    }
}

//SUM OF NUMBERS 1-100
let k = 1;
result = 0;
while (k <= 100) {
    result = result + k;
    k++;
}
console.log(result);


//First 10 ODD NUMBERS
for (let oddNumber = 0; oddNumber < 20; oddNumber++) {
    if(!oddNumber % 2 == 0) {
        console.log("Odd Number: " + oddNumber);
        oddNumber++;
    }
}

//First 10 NUMBERS OF FIBONACCI
let timesFibonacci = 10
result = 0;
for (let fibonacci = 0; timesFibonacci; fibonacci++) {
    if(fibonacci == 0) {
        console.log(result);
        fibonacci++;
        timesFibonacci--;
    }
    else if(fibonacci == 1) {
        result = 1;
        console.log(result);
        fibonacci++
        timesFibonacci--;
    }
    else if(fibonacci > 1) {
        result = result + fibonacci-1;
        console.log(result);
        fibonacci++
        timesFibonacci--;
    }

}