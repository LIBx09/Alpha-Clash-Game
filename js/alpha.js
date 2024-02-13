// function play(){
//     //step-1 : hide the home screen . to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     //step-2 : show the play-ground.

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }

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
    showElementById('play-ground');
    continueGame();
}