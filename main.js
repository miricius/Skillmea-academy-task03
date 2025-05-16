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


// MAIN CODE
array = fillInArray();

// Sum of array
console.log(`Celkový súčet poľa 0-10 je: ${sum(array)}`);

// Max number
console.log('Najväčšie číslo v poli je: ' + Math.max(...array));

// How many Vashos is in array
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
