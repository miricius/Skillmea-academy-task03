const targetsArray = document.querySelectorAll('.target p');

// Play the pistol shot sound
function playShotSound () {
    const audio = new Audio('sound/pistol-shot.mp3');
    audio.play();
}

// Shake the array
function shakeArray(array) {
    //let shakesNumber = Math.floor(Math.random() * 10) + 1;

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// MAIN PROGRAM

// Create a new array of 5 items
let array = [];
for (i = 1; i <= 5; i++) {
    array.push(i);
}

array = shakeArray(array);
targetsArray.forEach((target, index) => {
    target.innerHTML = array[index];
    target.addEventListener('mouseenter', () => {
        if (target.innerHTML == 1) {
            alert('Našiel si Vaša!');
        }
    })
});


