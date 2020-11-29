import { randomString } from './randomstring.js'
import { Card } from './card.js'
export class Column {
    constructor(name) {
        this.id = randomString();
        this.name = name;
        this.$element = this.createColumn();
    }

    createColumn() {
        const $column = $('<div>').addClass('column');
        const $columnTitle = $('<h2>').addClass('column-title').text(this.name);
        const $columnCardList = $('<ul>').addClass('column-card-list');
        const $columnDelete = $('<button>').addClass('btn-delete').text('x');
        const $columnAddCard = $('<button>').addClass('add-card').text('Dodaj nowe zadanie');

        $columnDelete.click(() => {
            this.removeColumn();
        });

        $columnAddCard.click(() => {
            this.addCard(new Card(prompt('wprowadź nazwę zadania')));
        });

        $column.append($columnTitle)
            .append($columnDelete)
            .append($columnAddCard)
            .append($columnCardList);

        return $column;
    };

    addCard(card) {
        this.$element.children('ul').append(card.$element);
    }

    removeColumn() {
        this.$element.remove();
    }
}