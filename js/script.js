var btnEncriptar = document.getElementById("botonEncriptar");
var btnDesencriptar = document.getElementById("botonDesencriptar");

/* Responsive */

function responsiveMedia(id, mq) {
  let breakpoint = window.matchMedia(mq);
  function responsive(e) {
    if (e.matches) {
      document.getElementById(id).innerHTML = `<img src="./img/munieco.png" alt="Imagen de muñeco">`;
    } else {
      document.getElementById(id).innerHTML = "";
    }
  }
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}


responsiveMedia("cont-img-munieco", "(min-width: 1025px)");



function encriptar() {
  var mensaje = document.getElementById("textoEntrada").value.toLowerCase();
  var textoEncriptado = mensaje.replace(/e/img, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");  
  imprimirEnElDom(textoEncriptado);
  document.getElementById("textoEntrada").value = "";
  copiado();     
}



function desencriptar() {
  var mensaje = document.getElementById("textoEntrada").value.toLowerCase();
  var textoEncriptado = mensaje.replace(/enter/img, "e");
  var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
  var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
  var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");   
  imprimirEnElDom(textoEncriptado);
  document.getElementById("textoEntrada").value = "";
  copiado();    
}


function imprimirEnElDom(mensaje) {
  var outputResponse = document.querySelector(".textoSalida");
  outputResponse.innerHTML = `
    <div class="results">
      <div class="text-result">${mensaje}</div>
      <button id="botonCopiar">Copiar</button>
    </div>`;
}


function copiado() {
  document.getElementById("botonCopiar").addEventListener("click", function () {
      let text = document.querySelector(".text-result").textContent;
       navigator.clipboard.writeText(text).then(() => {        
         //alert("Texto copiado");
      });
    });
}


btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);