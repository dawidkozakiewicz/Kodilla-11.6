import { randomString } from './randomstring.js'

export class Card {
    constructor(description) {
        this.id = randomString();
        this.description = description;
        this.$element = this.createCard();
    }
    removeCard() {
        this.$element.remove();
    }
    createCard() {
        if (this.description) {
            var $card = $('<li>').addClass('card');
            var $cardDescription = $('<p>').addClass('card-description').text(this.description);
            var $cardDelete = $('<button>').addClass('btn-delete').text('x');

            $cardDelete.click(() => {
                this.removeCard()
            })

            $card.append($cardDelete)
                .append($cardDescription);

            return $card;
        } else if (this.description == false) {
            alert('Wpisz proszę opis zadania');
        };
    };
}