// Uloha 03a
// *********

/*
	Vytvorenie novej karty na stranke.
	Uzivatel si moze vybrat, ci chce kartu pridat na zaciatok alebo na koniec zoznamu.
	Uzivatel si zada nadpis a text karty vo formulári na stránke.
*/

// Funkcia na pridanie novej karty
function addCard(headingText, paragraphText, addToStart) {
	//najdi zoznam kariet
	let cardList = document.querySelector('.card-list');
	
	//vytvor novy <li> element a prirad mu class
	let newCard = document.createElement('li');
	newCard.classList.add('inside');

	//vytvor nadpis
	let newHeading = document.createElement('H3');
	newHeading.textContent = headingText;
	
	//vytvor text
	let newParagraph = document.createElement('p');
	newParagraph.textContent = paragraphText;

/* 	
	//pridaj nadpis a text do karty
	//toto je dlhsi zapis
	newCard.appendChild(newHeading);
	newCard.appendChild(newParagraph);
*/

	//pridaj nadpis a text do karty
	//toto je kratsi, cistejsi zapis
	newCard.append(newHeading, newParagraph);

	//prida novu kartu na zaciatok alebo na koniec zoznamu
	//ale ak je zoznam prazdny, prida ho rovno na koniec, bez ohladu na parameter addToStart
	if (cardList.firstElementChild === null || !addToStart) {
		cardList.appendChild(newCard);
	} else {
		cardList.insertBefore(newCard, cardList.firstElementChild);
	}
}

// addCard('Nadpis', 'Text', false);


// Uloha 03b
// *********

/*	Vytvorenie formulara, do ktoreho uzivatel zada
	text pre nadpis a telo karty. Dalej zada, ci
	sa ma nova karta pridat na zaciatok alebo koniec
*/

document.getElementById('button').addEventListener('click', function(e) {
	
	// Zabranime defaultnemu odoslaniu a reloadu stranky
	e.preventDefault();

	// Z formulara zistime hodnoty pre nadpis a telo
	let heading = document.getElementById('heading').value;
	let paragraph = document.getElementById('paragraph').value;

	// Zistime, ci novu kartu pridat na zaciatok alebo na koniec zoznamu
	let toStart = document.getElementById('toStart').checked;
	
	addCard(heading, paragraph, toStart);
});
