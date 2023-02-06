let word = 'hallo';
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let counter = 5;

function createBoard() {
    for (let i = 0; i < word.length; i++) {
        const $letterBox = document.createElement('div');
        $letterBox.classList.add('flex');

        const $letterOfGivenWord = document.createElement('p');
        $letterOfGivenWord.innerText = word[i];
        $letterOfGivenWord.classList.toggle('visible');
        
        $letterBox.appendChild($letterOfGivenWord);

        document.querySelector('.lettersRightWord').appendChild($letterBox);
    }
}


function displayBoard() {
    showCountdown();

    document.querySelectorAll('.flex').forEach(element => element.remove());
    createBoard();
    

}

function checkLetter(letter) {
    for(letterIndex in word) {
        if(word[letterIndex] == letter.value) {
            return true;
        }
    }
    return false;
}

function showUsedLetters(letter) {
    const usedLetter = document.createElement('li');
    usedLetter.innerText = letter.value.toUpperCase();
    document.querySelector('.used').appendChild(usedLetter);
    counter--;
}

function showCountdown() {
    const $countdown = document.querySelector('.countdown');
    $countdown.innerText = counter + ' left';
}

function addCorrectLetter(letter) {
    console.log('correct');
}


window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const letter = document.getElementById('letter');

    displayBoard(null);
    form.addEventListener('submit', event => {
        event.preventDefault();

        displayBoard(letter);
        if(checkLetter(letter)) {
            addCorrectLetter(letter);
        }else{
            showUsedLetters(letter);
            console.log(counter)
        }
    });
});



//window.addEventListener('DOMContentLoaded', () => displayLetters());



//input - takes in a word
//predefined word
//number of maximal trys - are counted 
//countdown guesses left