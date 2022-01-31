let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerName = document.getElementById("name-el")
let card1 = document.getElementsByClassName("card")


let player = {
    name: "Per",
    chips: 145
}

function resetGame() {
    location.reload()
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    //main game function
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    card1.textContent += firstCard
    card1.textContent += secondCard
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want a new card?"
    }
    else if (sum === 21) {
    message = "Woohoo! You've got BlackJack!"
    hasBlackJack = true
    }
    else {
        //will 'kill' the game
    message = "You're out of the game!"
    isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        card1.textContent += card
        sum += card
        cards.push(card)
        renderGame()
    }
}

