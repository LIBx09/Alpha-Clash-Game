// function play(){
//     //step-1 : hide the home screen . to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     //step-2 : show the play-ground.

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    //stop the  game if pressed 'Esc';
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, currentAlphabet);
    //check matched or not
    if (playerPressed === expectedAlphabet){
        console.log('you get a point');
        // console.log('you have pressed correctly',expectedAlphabet);
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        //--update score:
        //1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // console.log(currentScoreText);
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        
        // //2.increase the score by ?+1
        
        // //3.show the update score
        // currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        
        //-----------------------------
        //step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //step-2:reduce the Life count
        // const newLife = currentLife - 1;
        // //step-3:display the updated life count
        // currentLifeElement.innerText = newLife
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame(){
    //step1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your random alphabet', alphabet);

    const currentElementAlphabet = document.getElementById('current-alphabet');
    currentElementAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet)
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    continueGame();

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //step-1:get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore);

    //clear the last selected alphabet highlight;
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}

