
import { Column } from './column.js'
import { Card } from './card.js'


$(function () {

	$('.create-column').click(function () {
		var name = prompt('wprowadź nazwę kolumny');
		if (name) {
			var column = new Column(name);
			board.addColumn(column);
		} else if (name == false) {
			alert('spróbuj jeszcze raz - wprowadź nazwę kolumny');
		};
	});

	var board = {
		name: 'Kanban Board',
		$element: $('.column-container'),
		addColumn(column) {
			this.$element.append(column.$element);
			initSortable();
		}
	};



	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list'
			// placeholder: 'card-placeholder'                       
		}).disableSelection();
	};



	var todoColumn = new Column('DO ZROBIENIA');
	var doingColumn = new Column('W TRAKCIE');
	var doneColumn = new Column('ZROBIONE');
	console.log(todoColumn)
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	var card1 = new Card('kodowanie');
	var card2 = new Card('kawa');
	var card3 = new Card('prysznic');

	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
	doneColumn.addCard(card3);

})
