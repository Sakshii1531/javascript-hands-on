const userInput = document.getElementById('input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuess = document.querySelector('.guess');
const btn = document.getElementById('btn');
const startBtn = document.getElementById('start-btn');



(function (){

    const allGuessArray = [];
    let randomNumber = Math.round(Math.random() * 100);

    form.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const userInputValue = userInput.value
    if(userInputValue < randomNumber){
        result.innerText = 'Too Low!'
    } else if(userInputValue > randomNumber){
        result.innerText = 'Too High!'
    } else{
        result.innerText = 'You got it Congrats!'
        startBtn.disabled = false
        btn.disabled=true
    }

    allGuessArray.push(userInputValue);
    allGuess.innerText = 'Your Guess :' + allGuessArray.join(', ');
    
    form.reset();
})

startBtn.addEventListener('click' , () => {
    result.innerText=' '
    allGuess.innerText=' '
    startBtn.disabled=true
    btn.disabled=false
    randomNumber=Math.round(Math.random()*100)
})

})();