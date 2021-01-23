class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word
        this.words = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    calculateStatus() {
        const finished = this.words.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }
    }
    get statusMessage() {
        if (this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'Failed') {
            return `Nice try ! The word was "${this.word}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.words.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.words.includes(guess)

        if (this.status !== 'Playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}