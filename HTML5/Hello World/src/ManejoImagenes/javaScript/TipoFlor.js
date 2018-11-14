var imagen = new  Array(3);
var consHeight= 200;
var width=400;
function tipoFlor(iiii) {
    alert(iiii);
}
function increarse() {
    imagen.height =400;
}
function notincrearse() {
    imagen.height =300;
    imagen[0].width
}

function Grande(new_text) {
    imagen[new_text].height=400;
    imagen[new_text].width=400;
}

function Chico(new_text) {
    imagen[new_text].height = 200;
    imagen[new_text].width = 200;
}

function incrementar () {
    var d = document.getElementById("barra").innerText;
    document.getElementById("barra").innerText=d +"d";
}
function manejaFlor() {
    //document.getElementsByTagName("img")[0].onclick=tipoFlor;
    for (var i = 0; i < 4; i++) {
        imagen[i] =   document.getElementsByTagName("img")[i];
        imagen[i].height = consHeight;
        imagen[i].width = consHeight;
        imagen[i].style.border="20px" ;
        imagen[i].style.borderColor='#000000';
        imagen[i].style.borderRadius = "20px";
document.getElementById("barra").innerText="sssss"

        //  imagen[i].addEventListener("click",  function(){modifyText(i)}  ,false);
    }
    //imagen =   document.getElementsByTagName("img")[0];
   imagen[0].addEventListener("mouseover",  function(){Grande("0")}  ,false);
    imagen[1].addEventListener("mouseover",  function(){Grande("1")}  ,false);
 //   imagen[2].addEventListener("mouseover",  function(){Grande("2")}  ,false);
    imagen[0].addEventListener("mouseout",  function(){Chico("0")}  ,false);
    imagen[1].addEventListener("mouseout",  function(){Chico("1")}  ,false);
 //   imagen[2].addEventListener("mouseout",  function(){Chico("2")}  ,false);

var  bucle ;
    imagen[2].addEventListener("click",  incrementar,false);
    bucle =setInterval(incrementar ,1000);
var key ;
key = window.onkeypress


   // imagen.addEventListener("click",  tipoFlor ),false);
    //imagen.addEventListener("mouseover",increarse,false);
    //imagen.addEventListener("mouseout",notincrearse,false);

}
//window.onload=manejaFlor;
window.addEventListener("load",manejaFlor,false)
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.key;
    if(keyCode==13) {
        alert("You hit the enter key.");
    } else {
        alert(keyCode.toString());
    }
}