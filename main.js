let win = false
const targetBoard = document.querySelectorAll('.target');
const targetsArray = document.querySelectorAll('.target p');
const startButton = document.querySelector('.start-button');
const boardSection = document.querySelector('.board');

// Start the game
function startGame() {
	startButton.style.visibility = 'hidden';
	boardSection.style.visibility = 'visible';
}

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

// Confetti
function shootConfetti() {
	const defaults = {
		spread: 360,
		ticks: 100,
		gravity: 0,
		decay: 0.94,
		startVelocity: 30,
	};

	function shoot() {
		confetti({
			...defaults,
			particleCount: 50,
			scalar: 1.2,
			shapes: ["circle", "square"],
			colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
		});

		confetti({
			...defaults,
			particleCount: 60,
			scalar: 2,
			shapes: ["emoji"],
			shapeOptions: {
				emoji: {
					value: ["🦄", "🌈"],
				},
			},
		});
	}

	setTimeout(shoot, 0);
	setTimeout(shoot, 100);
	setTimeout(shoot, 200);
}

// MAIN PROGRAM

// Create a new array of 5 items
let array = [];
for (i = 1; i <= 5; i++) {
    array.push(i);
}

array = shakeArray(array);
targetBoard.forEach((target, index) => {
    target.addEventListener('mousemove', () => {
        if (targetsArray[index].innerHTML == 1 && win == false) {
            targetsArray[index].style.transform = 'rotate(720deg)';
			targetsArray[index].style.transition = 'transform 2s';
			shootConfetti();
            win = true;

			setTimeout(() => {
				targetsArray[index].innerHTML = '';
				targetsArray[index].parentElement.classList.add('target-win');
			}, 2000);

            setTimeout(() => {
				Swal.fire({
					title: "Našiel si Vaša!",
					text: "Gratulujem k výhre!",
					icon: "success	",
					confirmButtonText: "Hrať znova"
					}).then((result) => {
					if (result.isConfirmed) {
						location.reload();
					}
				});
            }, 4000);
			
        }
    })
});
targetsArray.forEach((target, index) => {
    target.innerHTML = array[index];
});


