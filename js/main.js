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

addCard('Nadpis', 'Text', false);