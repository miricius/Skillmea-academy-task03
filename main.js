// Najdeme obrazok a score Mitcha
const mitchPic = document.querySelector('.mitch img');
const mitchScore = document.querySelector('.mitch p');

// Najdeme obrazok a score Vasa
const vashoPic = document.querySelector('.vasho img');
const vashoScore = document.querySelector('.vasho p');

mitchPic.addEventListener('click', () => {
    console.log('Mitch' + mitchScore.innerText);
});

vashoPic.addEventListener('click', () => {
    console.log('Vašo' + vashoScore.innerText);
});