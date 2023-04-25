const colorPalette = document.querySelector('.color-palette');
colorPalette.addEventListener('click', selectColor);

function selectColor(e) {
    if (e.target === e.currentTarget) return

    const targetColor = e.target.style.backgroundColor;
    document.body.style.backgroundColor = targetColor;
}

function createPaletteItems() {
    let murkup = '';
    for (let index = 0; index < 100; index++) {
        murkup += `<div class= "item" style="background-color:${getRandomColor()};"> </div>`
    }
    return murkup;
}
colorPalette.insertAdjacentHTML('beforeend', createPaletteItems())


function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}