// Najdeme rodica vsetkych obrazkov
const parent = document.querySelector('.group');

// Cyklus pre vsetky obrazky na stranke (v triede .group)
parent.querySelectorAll('img').forEach((img) => {
    // Po kliknuti na obrazok sa zvysi score o 1
    img.addEventListener('click', () => {
        // Zobrazime alert s menom obrazka
        img.parentElement.querySelector('p').innerText =
            Number(img.parentElement.querySelector('p').innerText) + 1;
    });
});