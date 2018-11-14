
var edad;


function comenzar() {
    edad = document.getElementById("edad");

    edad.addEventListener("change",cambio_rango,false);
    document.getElementById("enviar").addEventListener("click",enviar,false);
   //Este evento de dispara cuando presiono el boton del formulario
    document.dato_usuario.addEventListener("invalid",validar,true );
   // este evento se dispara con cada tecla presionada sobre sl formulario controlando
    document.dato_usuario.addEventListener("input",validarTiempoReal,false );

}
function validarTiempoReal(e) {
    var elemento=e.target;
     if(elemento.validity.valid==true ){
         elemento.style.background="white";
     }
    else{
     elemento.style.background="red";
     }
}
function validar(e) {

var elemento1 = e.target;

    elemento1.style.background="#FFDDDD";
}
function enviar() {
var correcto= document.dato_usuario.checkValidity();
var cuadro_usuario= document.getElementById("nombre");
 if (correcto==true){
     document.dato_usuario.submit ();
 }else if (cuadro_usuario.validity.valueMissing==true  ){
     alert("El usuario no puede esta vacio");
 }
}
function cambio_rango() {
    var salida;
    var calculo;
    salida = document.getElementById("rango");

    calculo=edad.value-0;
    if (calculo<1){

    }
    else{
        salida.innerHTML=calculo
    }
}
window.addEventListener("load",comenzar,false);