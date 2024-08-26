/* Ocultar div del texto */
const divMostrarTexto = document.querySelector(".mostrar-texto");
const divMostrarImagen = document.querySelector(".mostrar-imagen");
const ocultarText = document.getElementById("ocultarText");

divMostrarTexto.style.visibility = "collapse";

/* Función para ocultar imagen */

function ocultarCorrespondiente() {

    let Texto = document.getElementById("ocultarText").value;

    if (Texto == "") {
        divMostrarTexto.style.visibility = "collapse";
        divMostrarImagen.style.visibility = "visible";
    } else {
          divMostrarImagen.style.visibility = "collapse";
          divMostrarTexto.style.visibility = "visible";
          ocultarText.scrollIntoView();
    }
}

/*Validaciones de texto*/

function verificarTexto() {
    const iTexto = document.getElementById("iTexto").value;
    const tieneMayusculasOAcentos = /[A-ZÁÉÍÓÚáéíóú]/.test(iTexto);
    
    if (tieneMayusculasOAcentos) {
        alert("El texto no puede contener mayúsculas o acentos.");
        return false; 
    }
    
    return true; // Devuelve verdadero si la verificación pasa.
}

/* Encriptar texto */
function encriptarTexto() {
    if (!verificarTexto()) {
        return; // Se detiene si la verificación falla
    }

    const iTexto = document.getElementById("iTexto").value;
    const reemplazos = {
        'e': 'enter',
        'i': 'ime',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let iTextoEncriptado = iTexto.split('').map(char => reemplazos[char] || char).join('');

    document.getElementById("ocultarText").innerHTML = iTextoEncriptado;
    ocultarCorrespondiente();
}

/* Función para desencriptar */

function desencriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let iTexto = document.getElementById("iTexto").value;
    /* desencriptar texto */
    let iTextoDesencriptado = iTexto.replace(/enter/g, 'e');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ime/g, 'i');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ai/g, 'a');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ober/g, 'o');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ufat/g, 'u');

    document.getElementById("ocultarText").innerHTML = iTextoDesencriptado;
    ocultarCorrespondiente();
}

/* Función para copiar */

function copiarTexto() {

    let copiarTexto = document.getElementById("ocultarText");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); // celulares
  
    navigator.clipboard.writeText(copiarTexto.value);
  
    alert("Se ha copiado el texto: " + copiarTexto.value);
  }