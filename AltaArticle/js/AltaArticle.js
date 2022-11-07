window.onload = function start(){
    AddFamilies();

    document.getElementsByTagName("select")[0].addEventListener("change", comprovaCodi);
    document.getElementById("codi").addEventListener("change", comprovaCodi);

    document.getElementById("Passadis").addEventListener("change", comprovaPassadis);
    document.getElementById("Estantaria").addEventListener("change", comprovaEstantaria);
    document.getElementById("Forat").addEventListener("change", comprovaForat);

    AddPoblacio();
    document.getElementsByTagName("select")[0].addEventListener("change", comprovaEdifici);
    document.getElementById("Edifici").addEventListener("change", comprovaEdifici);
}

function AddFamilies(){
    var Familia = ['Breach', 'Ziggs', 'Yummy', 'Cypher', 'Raze'];

    let select = document.getElementById('Familia');

    let mapFamilia = Familia.map(Families => Families.substr(0,3));
    console.log(mapFamilia)

    Familia.sort();
    Familia.forEach (i => {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    });
}

const DC = new Map();
    DC.set(0, "A");
    DC.set(1, "X");
    DC.set(2, "M");
    DC.set(3, "T");
    DC.set(4, "B");
    DC.set(5, "C");
    DC.set(6, "S");
    DC.set(7, "O");
    DC.set(8, "P");
    DC.set(9, "Z");

function comprovaCodi() {
    var select = document.getElementsByTagName("select")[0];
    var codi = document.getElementById("codi");

    var digitsCodi = codi.value.split("-")[1];
    var opcioEscollida = select.options[select.selectedIndex].text.toLowerCase();
    var lletres = opcioEscollida.slice(0, 3);
    var digitControl = DC.get(digitsCodi % 10);

    var regEx = new RegExp(`^${lletres}`, "i", `-[0-9]{7}-${digitControl}{1}$`);
    var regExpTest = regEx.test(codi.value);

    Img(codi, regExpTest);
}

function comprovaPassadis() {
    var codi = document.getElementById("Passadis");

    var regEx = new RegExp(/^P-[0-9]{2}-(E|D){1}$/);
    var regExpTest = regEx.test(codi.value);

    Img(codi, regExpTest);
}

function comprovaEstantaria() {
    var codi = document.getElementById("Estantaria");

    var regEx = new RegExp(/^EST\+[0-9]{2}\.[0-9]{2}$/);
    var regExpTest = regEx.test(codi.value);

    Img(codi, regExpTest);
}

function comprovaForat() {
    var codi = document.getElementById("Forat");

    var regEx = new RegExp(/^[0-9]{2}\*[A-Z]{3}\*[0-9]{2}\[0-9]{2}$/);
    var regExpTest = regEx.test(codi.value);

    Img(codi, regExpTest);
}

function Img(inputElement, isValid) {
    var Tick = "./imatges/tick.png";
    var Creu = "./imatges/creu.png";
    var imatge = inputElement.nextElementSibling;

    if (isValid) {
        imatge.src = Tick;
    } else {
        imatge.src = Creu;
    }
}


//examen 1.1
function AddPoblacio(){
    var Poblacions = ['Catalunya', 'Batet', 'China', 'Canya', 'Canada'];

    let select = document.getElementById('Localització');

    let mapPoblacions = Poblacions.map(Poblacio => Poblacio.substr(0,3));
    console.log(mapPoblacions)

    Poblacions.sort();
    Poblacions.forEach (i => {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    });
}

//examen 1.2
function comprovaEdifici() {
    var select = document.getElementsByTagName("select")[0];
    var Edifici = document.getElementById("Edifici");

    var opcioEscollida = select.options[select.selectedIndex].text.toLowerCase();
    var lletres = opcioEscollida.slice(0, 5);

    var regEx = new RegExp(`^${lletres}+[0-9]{3}.[a-z]{2}$`);
    var regExpTest = regEx.test(Edifici.value);

    Img(Edifici, regExpTest);
}