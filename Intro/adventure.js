//Generate a random number
//Give the ability to guess
//If they guess wrong, ask to geuss again (hint)
//Tell them if they win

function guessGame() {
    let randomNumber = Math.floor(Math.random() * 11);
    let guess;

    do {
        guess = prompt(`Guess a number between 1 and 10:`)

        console.log(guess, randomNumber);

        if (randomNumber > guess) {
            console.log(`too low`);
        } else if (randomNumber < guess) {
            console.log(`too high`);
        }
    } while (guess != randomNumber)
    console.log(`you won`);
}

guessGame();