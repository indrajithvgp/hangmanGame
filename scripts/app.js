const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () =>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    game1.puzzle.split("").forEach(element => {
        const letterEl = document.createElement('span')
        letterEl.textContent =element
        puzzleEl.appendChild(letterEl)
        
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)      
    render()

}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getCountry().then((d)=>{
    console.log(`${d.loc}, ${d.region}, ${d.city}, Channasandra`)
}).catch((e)=>{
    console.log(e)
})