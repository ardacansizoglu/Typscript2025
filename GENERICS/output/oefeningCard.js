"use strict";
class CardCollection {
    constructor() {
        this.cards = [];
    }
    //1kart eklemek icin METHOD
    addCard(card) {
        this.cards.push(card);
    }
    drawCard() {
        if (this.cards.length === 0)
            return null;
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const drawnCard = this.cards.splice(randomIndex, 1)[0];
        //returnwaarde van splice is array met virwijderde element
        return drawnCard;
    }
    //Methoden om het aantal kaarten te retournen
    countCards() {
        return this.cards.length;
    }
}
// Voorbeeld van gebruik
let playingCards = new CardCollection();
playingCards.addCard("Harten Aas");
playingCards.addCard("Klaveren 10");
console.log(playingCards.countCards()); // Outputs: 2
console.log(playingCards.drawCard()); // Outputs: (willekeurig) "Harten Aas" of "Klaveren 10"
console.log(playingCards.countCards()); // Outputs: 1
