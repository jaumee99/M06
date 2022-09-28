
window.onload = function start(){
    AddFamilies();
    //const input = document.querySelector('input');
    //input.addEventListener('input', CodiRegEx());
}

function AddFamilies(){
    var Familia = ["Breach", "Ziggs", "Yummy", "Cypher", "Raze"];

    let select = document.getElementById('Familia');

    Familia.sort();
    Familia.forEach (i => {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    });

/*    function CodiRegEx() {
        let value = document.getElementById("Codi").value;
        const regEx = /^[A-Za-z]{3}-\d{7}-[A | X | M | T | B | C | S | O | P | Z]$/;
        return regEx.test(value);
    }
*/
    const inputs = document.querySelectorAll('input');

    const patterns = {
        Codi: /^[A-Za-z]{3}-\d{7}-[A | X | M | T | B | C | S | O | P | Z]$/
    }

    function validate(field, regex){
        if(regex.test(field.value)) {
            field.className = 'valid';
        } else{
            field.className = 'invalid';
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            console.log(e.target.value);
            validate(e.target,patterns[e.target.attributes.name.value]);
        });
    });

    function Img(inputElement, isValid) {
        var Tick = "../imatges/tick.png";
        var Creu = "../imatges/creu.png";
        var imatge = inputElement.nextElementSibling;
    
        if (isValid) {
            imatge.src = Tick;
        } else {
            imatge.src = Creu;
    
        }
    
    }


    const Amplada = document.querySelector('#Amplada');
    const Llargada = document.querySelector('#Llargada');
    const Altura = document.querySelector('#Altura');
    const result = document.querySelector('#result');
    
    Amplada.addEventListener('input', function () {
        result.textContent = this.value;
    });
    Llargada.addEventListener('input', function () {
        result.textContent = this.value;
    });
    Altura.addEventListener('input', function () {
        result.textContent = this.value;
    });
    
}
