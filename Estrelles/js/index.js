
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


