// Konstanty a funkcie

// Funkcia pre pridanie noveho obrazku z formulara
function pridajTypka() {
    // Najdeme rodica vsetkych obrazkov
    const parent = document.querySelector('.group');
    
    // Vytvorime novy div pre obrazok a text
    const newDiv = document.createElement('div');
    // Najdeme posledny obrazok
    const lastDiv = parent.querySelectorAll('.group div');
    // Najprv zistime, ci bude obrazok zarovnany vpravo alebo vlavo a pridame mu triedu
    if (lastDiv[lastDiv.length - 1].classList.contains('pull-right')) {
        newDiv.classList.add('pull-left');
    } else {
        newDiv.classList.add('pull-right');
    }
    // Potom mu pridame dalsie triedy
    let menoTypka = document.querySelector('#menoTypka').value;
    if (menoTypka === '') {
        menoTypka = 'nobody';
    }
    newDiv.classList.add('dude');
    newDiv.classList.add(menoTypka.toLowerCase());

    // Vytvorime novy obrazok
    const newImg = document.createElement('img');
    newImg.src = 'https://picsum.photos/355/455?random=' + Math.random();

    // Vytvorime text pre score
    const newScore = document.createElement('p');
    let score = document.querySelector('#skore').value;
    score = parseInt(score);
    // Ak je score prazdne alebo nie je cislo, nastavime ho na 0
    if (Number.isInteger(score) === false || score === '') {
        score = 0;
    }
    // Pridame triedu pre score
    newScore.classList.add('score');
    // Pridame text do score
    newScore.innerText = score;

    // Pridame obrazok a text do divu
    newDiv.appendChild(newImg);
    newDiv.appendChild(newScore);
    // Pridame div do parenta
    parent.appendChild(newDiv);
}

// MAIN PROGRAM
//------------------------------------------------------------

// Najdeme rodica vsetkych obrazkov
const parent = document.querySelector('.group:last-child');

// Cyklus pre vsetky obrazky na stranke (v triede .group)
parent.querySelectorAll('img').forEach((img) => {
    // Po kliknuti na obrazok sa zvysi score o 1
    img.addEventListener('click', () => {
        // Zobrazime alert s menom obrazka
        img.parentElement.querySelector('p').innerText =
            Number(img.parentElement.querySelector('p').innerText) + 1;
    });
});