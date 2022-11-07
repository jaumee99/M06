//import {Article} from '../module/Article.mjs';

window.onload = function start(){
    numFactura();
    select();
    var button = document.getElementsByName("add");
    button[0].addEventListener("click", addFila);
}

function numFactura(){
    window.addEventListener("unload", function(){
        var count = parseInt(localStorage.getItem('numFactura') || 0);
      
        localStorage.setItem('numFactura', ++count)
      }, false);

      document.getElementById('numFactura').innerHTML += '<br>num factura: 2022/' + localStorage.getItem('numFactura');
}


var producte = [      
            {
                "code" : 1,
                "nom" : "pa",
                "quantitat": "<input type=\"number\" name=\"myNumber\" id=\"pa\" value=\"1\">",
                "preu": 2,
                "Total": "0"
            },
            {
                "code" : 2,
                "nom" : "oli",
                "quantitat": "<input type=\"number\" name=\"myNumber\" id=\"oli\" value=\"1\">",
                "preu": 5,
                "Total": "0"
            },
            {
                "code" : 3,
                "nom" : "tomate",
                "quantitat": "<input type=\"number\" name=\"myNumber\" id=\"tomate\" value=\"1\">",
                "preu": 3,
                "Total": "0"
            },
            {
                "code" : 4,
                "nom" : "embotit",
                "quantitat": "<input type=\"number\" name=\"myNumber\" id=\"embotit\" value=\"1\">",
                "preu": 23,
                "Total": "0"
            },
            {
                "code" : 5,
                "nom" : "vi",
                "quantitat": "<input type=\"number\" name=\"myNumber\" id=\"vi\" value=\"1\">",
                "preu": 20,
                "Total": "0"
            }   
]


function select() {
    for(x in producte ){
        var sel = document.createElement("option");
        sel.innerHTML = producte[x].nom;
        sel.value  = producte[x].nom;
        document.getElementById("article").appendChild(sel);
      }
}

  function addFila()
  { 
    let article = document.getElementById("article").value;
    let tr = document.createElement('tr');
    article = producte.find(x => x.nom == article);

    Object.keys(article).forEach(e => {
        let td = document.createElement('td');
        td.innerHTML = article[e];
        tr.appendChild(td);
    });

    document.getElementsByName("tbl")[0].appendChild(tr);
  }

  function calcularPreu(){
    preu = Array.prototype.find.call(producte, (x) => !Number.isInteger(x))
    Total = quantitat(val)*preu;
    return Total;
  }

  function quantitat(val) {
    document.getElementsByName('myNumber').value=val;
}