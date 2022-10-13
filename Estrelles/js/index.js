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

const maxStarRadius = 1.5;

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

const stars = createStars(width, height, 30);

function render() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    stars.forEach(function(star) {
        const x = star.x;
        const y = star.y;
        const r = star.r;
        fillCircle(ctx, x, y, r, "rgb(255, 255, 255)");
    });
}

render();


//html input range i localStorage
function numeroSTR(val) {
    document.getElementById('numeroSTR').value=val;
    localStorage.setItem('Numeros estrelles', val)
}

function radiSTR(val) {
    document.getElementById('radiSTR').value=val;
    localStorage.setItem('Radi estrella', val)
}

function distanciaSTR(val) {
    document.getElementById('distanciaSTR').value=val;
    localStorage.setItem('Distancia estrelles', val)
}

document.getElementById("Mostra").onclick = function () {
    location.href = "estrellesPage.html";
};

document.getElementById("Back").onclick = function () {
    location.href = "index.html";
};


