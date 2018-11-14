
var nombre;

function comenzar() {
        nombre = document.getElementById("id_texto1");
        nombre.addEventListener("input",cambioColor,true);
        cambioColor();
}

function cambioColor() {
    // nombre.style.background="red";
   // alert("2");
    if (nombre.value!="22" ){
    nombre.setCustomValidity("Introduce 22");
    nombre.style.background="cyan";
    }
else{
        nombre.setCustomValidity("");
        nombre.style.background="red";
    }

}
window.addEventListener("load",comenzar,false);
