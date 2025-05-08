// Najdeme obrazok a score Mitcha
const mitchPic = document.querySelector('.mitch img');
const mitchScore = document.querySelector('.mitch p');

// Najdeme obrazok a score Vasa
const vashoPic = document.querySelector('.vasho img');
const vashoScore = document.querySelector('.vasho p');

// Po kliknuti na obrazok sa zvysi score o 1
mitchPic.addEventListener('click', () => {
    mitchScore.innerText = Number(mitchScore.innerText) + 1;
});
vashoPic.addEventListener('click', () => {
    vashoScore.innerText = Number(vashoScore.innerText) + 1;
});