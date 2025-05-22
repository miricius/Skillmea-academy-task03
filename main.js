// functions
let array = [];

function fillInArray() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.round(Math.random() * 10));
    }
    return array;
}

function sum(array) {
    let sum = 0;
    array.forEach(item => {
        sum += item;
    });
    console.log(array);
    return sum;
}

function createNewCard (bookParent, book) {
	const card = document.createElement('li');
	card.innerHTML = `
		<div class="card" style="width: 18rem;">	
			<img class="card-img-top" src="${book.cover}" alt="${book.title}">
			<div class="card-body">
				<h3 class="card-title">${book.title}</h3>
				<p class="card-text">${book.description}</p>
			</div>
		</div>
	`
	bookParent.appendChild(card);
}


// MAIN CODE
array = fillInArray();



// Sum of array
// ------------
console.log(`Celkový súčet poľa 0-10 je: ${sum(array)}`);

// Max number
console.log('Najväčšie číslo v poli je: ' + Math.max(...array));



// How many Vashos is in array
// ---------------------------
const numberTwo = array.filter(item => item === 1);
/*
console.log(numberTwo.length == 0 ? 'V poli nie je žiadny Vašo' :
    numberTwo.length == 1 ? `V poli je jeden Vašo` :
    `V poli je ${numberTwo.length} Vašov`);
*/
switch (numberTwo.length) {
    case 0:
        console.log('V poli nie je žiadny Vašo');
        break;
    case 1:
        console.log('V poli je jeden Vašo');
        break;
    case 2:
    case 3:
    case 4:
        console.log(`V poli sú ${numberTwo.length} Vašovia`);
        break;
    default:
        console.log(`V poli je ${numberTwo.length} Vašov`);
}



// Even and odd numbers
// --------------------
const evenNumbers = array.filter(item => item % 2 === 0);
const oddNumbers = array.filter(item => item % 2 !== 0);
console.log(`V poli je ${evenNumbers.length} párnych čísel a` +
    `${oddNumbers.length} nepárnych čísel`);



// Funkcia na vynásobenie poľa * 10
// --------------------------------
let arrayTens = [];
for (let i in array) {
    arrayTens[i] = array[i] * 10;    
}
console.log(arrayTens);



// Funkcia pre vypisanie kazdeho druheho cisla
// -----------------
let arraySecondNumber = [];
for (let i = 0; i < array.length; i += 2) {
    arraySecondNumber[i/2] = array[i];
}
console.log(arraySecondNumber);  



// Hviezdicky
// ----------
let stars = '';
for (i=1; i<= 5; i++) {
	stars += '*';
	// for (let j=1; j<=i; j++) {
	// 	stars += '*';
	// }	
}
console.log(`Najprv len 5 hviezdičiek: ${stars}`);

console.log(`Potom pyramida:`);
for (i=5; i>= 1; i--) {
	stars = '';
	for (let j=1; j<=i; j++) {
		stars += '*';
	}	
	console.log(stars);
}



// Uloha 05c - pole knih
// ---------------------
const books = [
	{
		title: 'Čaroděj Zeměmoří',
		cover: 'img/carodej_zememori.jpg',
		author: {
				name: 'Ursula K. Le Guin',
				photo: 'img/ursula_le_guin.jpg',
				description: 'Ursula K. Le Guin (1929-2018) bola americká spisovateľka, ' +
					'známa predovšetkým svojou prácou v oblasti fantasy a sci-fi literatúry. ' +
					'Jej dielo sa vyznačuje hlbokým zamyslením nad otázkami identity, kultúry a spoločnosti.',
				year: 1929
			},
		price: 312,
		year: 1992,
		description: 'Zeměmoří - fascinující svět stvořený Velmistryní žánru SF&F Ursulou K. Le Guin.'
	},
	{
		title: 'Harry Potter a Kámen mudrců',
		cover: 'img/harry_potter.jpg',
		author: {
				name: 'J. K. Rowling',
				photo: 'img/j_k_rowling.jpg',
				description: 'Joanne Rowlingová, píšící pod jménem J. K. Rowlingová či pseudonymem Robert Galbraith, ' +
					'je britská spisovatelka, známá zejména díky sedmidílné řadě knih o čarodějnickém učni Harrym Potterovi, ' +
					'která získala celosvětový úspěch.',
				year: 1965
			},
		price: 269,
		year: 1997,
		description: 'Brýlatý chlapec s nachovou jizvou na čele, připomínající blesk - to je Harry Potter.'
	},
	{
		title: 'Stopařův průvodce Galaxií',
		cover: 'img/stoparuv_pruvodce.jpg',
		author: {
				name: 'Douglas Adams',
				photo: 'img/douglas_adams.jpg',
				description: 'Douglas Noël Adams byl anglický spisovatel, dramatik humoristických rozhlasových pořadů a ' +
					'hudebník, který proslul knižní sérií Stopařův průvodce po Galaxii.',
				year: 1952
			},
		price: 383,
		year: 1991,
		description: 'První část "pětidílné stopařské trilogie", kterou autor původně koncipoval jako rozhlasovou hru pro stanici BBC.'
	},
	{
		title: 'Alenka v říši divů',
		cover: 'img/alenka_v_risi_divu.jpg',
		author: {
				name: 'Lewis Carroll',
				photo: 'img/lewis_carroll.jpg',
				description: 'Charles Lutwidge Dodgson, známý pod pseudonymem Lewis Carroll, byl anglický spisovatel, ' +
					'matematik, logik, učenec, anglikánský diakon a fotograf. Jeho nejznámější knihou je Alenka v říši divů a ' +
					'její následné pokračování Za zrcadlem a co tam Alenka našla.',
				year: 1832
			},
		price: 110,
		year: 2010,
		description: 'Vydejte se v Alenčiných stopách na fantastickou cestu, na niž nikdy nezapomenete.'
	},
	{
		title: 'Jméno větru',
		cover: 'img/jmeno_vetru.jpg',
		author: {
				name: 'Patrick Rothfuss',
				photo: 'img/patrick_rothfuss.jpg',
				description: 'Patrick James Rothfuss je americký spisovatel fantasy a přednášející na vysoké škole. ' +
					'Je autorem předpokládané trilogie Kronika Královraha, která byla odmítnuta několika nakladatelstvími ' +
					'před tím, než první knihu série, Jméno větru, vydala v roce 2007 společnost DAW/Penguin.',
				year: 1973
			},
		price: 403,
		year: 2008,
		description: 'Jmenuji se Kvothe. Unášel jsem spícím mohylovým králům ukradené princezny. Spálil jsem město Trebon.'
	}
]


// Celkova cena vsetkych knih
let totalPrice = 0;
books.forEach(book => {
	totalPrice += book.price;
});

totalPrice = totalPrice.toLocaleString('cs-CZ', {
	style: 'currency',
	currency: 'CZK',
});

console.log(`Celková cena všetkých kníh je: ${totalPrice}`);


// Najdrahsia kniha
let highestPrice = 0;
let bookName = '';
books.forEach(book => {
	if (book.price > highestPrice) {
		highestPrice = book.price;
		bookName = book.title;
	}
});
highestPrice = highestPrice.toLocaleString('cs-CZ', {
	style: 'currency',
	currency: 'CZK',
});
console.log(`Najdrahšia kniha je ${bookName} a jej cena je: ${highestPrice}.`);


// Najstarsia kniha
let oldestBook = 0;
let oldestBookName = '';
books.forEach(book => {
	if (book.year < oldestBook || oldestBook === 0) {
		oldestBook = book.year;
		oldestBookName = book.title;
	}
});
console.log(`Najstaršia kniha je ${oldestBookName} a je z roku ${oldestBook}.`);



// Uloha 05d - zoznam knih
// -----------------------
const bookList = document.querySelector('.cards ul');
books.forEach(book => {
	createNewCard(bookList, book);
});