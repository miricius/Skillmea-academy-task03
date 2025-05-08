// Konstanty a funkcie

let speed = 2; // Rychlost pohybu obrazku

//Funkcia pre klikanie na obrazok
function klikniNaObrazok() {
    // Najdeme vsetky obrazky
    const images = document.querySelectorAll('.group img');
    // Pre kazdy obrazok pridame event listener
    images.forEach((img) => {
        img.addEventListener('click', () => {
            // Zvysime score o 1
            img.parentElement.querySelector('p').innerText =
                Number(img.parentElement.querySelector('p').innerText) + 1;
        });
    });
}

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

    // Pridame event listener na novy obrazok
    newImg.addEventListener('click', () => {
        // Zvysime score o 1
        newScore.innerText = Number(newScore.innerText) + 1;
    });
}

//Hra s obrazkami
function addGamePicture() {
    // Pridame novy obrazok na stranku
    const newPicture = document.createElement('img');
    newPicture.src = './images/vasho.jpg';
    //newPicture.classList.add('gamePic');

    // Horizontalna poloha obrazku bude nahodna
    const randomX = Math.random() * (window.innerWidth - 150);
    newPicture.style.left = randomX + 'px';

    //Najdeme sekciu gameBoard a pridame do nej obrazok
    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.appendChild(newPicture);

    let posY = 0;
    let interval = setInterval(() => {
        // Posunieme obrazok dole
        posY += speed;
        newPicture.style.top = posY + 'px';

        // Ak sa obrazok dostane mimo obrazovky, zastavime interval
        if (posY > window.innerHeight-180) {
            clearInterval(interval);
            gameBoard.removeChild(newPicture);
        }
    }, 10);
}

function startGame () {
    let interval = setInterval(() => {
        // Pridame novy obrazok na stranku
        addGamePicture();
    }, 1000); // Obrazok sa bude pridavat kazdu sekundu
}

// MAIN PROGRAM
//------------------------------------------------------------

// Klikanie na obrazok
klikniNaObrazok();


