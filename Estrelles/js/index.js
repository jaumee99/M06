//en la segona pagina si es vol canviar la quantitat de estrelles d'ha de anar fent f5
//falta fer: distancia entre estrelles
window.onload = function start(){
    
    stars = createStars(width, height, 30);
    render();
    document.getElementById("radiSTR").addEventListener("change", numeroSTR);
    document.getElementById("distanciaSTR").addEventListener("change", distanciaSTR);
}

let stars;

//estrelles
const backgroundColor = "#000";
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function fillCircle(ctx, x, y, r, fillStyle) {
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}


const maxStarRadius = window.localStorage.getItem('Radi estrella');
const minDistance = window.localStorage.getItem('Distancia estrelles');
const quantStar = window.localStorage.getItem('Numeros estrelles');


function createStars(width, height, spacing) {
    const stars = [];

    for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
        const star = {
            x: x + randomInt(spacing),
            y: y + randomInt(spacing),
            r: Math.random() * maxStarRadius,
        };
        stars.push(star);
        }
    }
    return stars;
}

//examen 2.1
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (color == '#000000'){
        color = getRandomColor();
    }
    return color;
  }



function render() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    for(let i = 0; i < quantStar; i++){
        const x = stars[i].x;
        const y = stars[i].y;
        const r = stars[i].r;
        fillCircle(ctx, x, y, r, getRandomColor());
    }
}


//localStorage
const size = [""]

function numeroSTR(val) {
    document.getElementById('numeroSTR').value=val;
    localStorage.setItem('Numeros estrelles', val)
    window.localStorage.setItem("numeroSTR", size[0].value);
    render();
}

function radiSTR(val) {
    document.getElementById('radiSTR').value=val;
    localStorage.setItem('Radi estrella', val)
    window.localStorage.setItem("radiSTR", size[1].value);
}

function distanciaSTR(val) {
    document.getElementById('distanciaSTR').value=val;
    localStorage.setItem('Distancia estrelles', val)
    window.localStorage.setItem("distanciaSTR", size[2].value);
}

document.getElementById("Mostra").onclick = function () {
    location.href = "estrellesPage.html";
};

document.getElementById("Back").onclick = function () {
    location.href = "index.html";
};


