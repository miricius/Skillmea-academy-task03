// functions

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
// Sum of array
console.log(`Celkový súčet poľa 0-10 je: ${sum(fillInArray())}`);