let timesEvenNumber = 10
for (let evenNumber = 2; timesEvenNumber; evenNumber++) {
    if(evenNumber % 2 == 0) {
        console.log("Even Number: " + evenNumber);
        timesEvenNumber--;
    }
}