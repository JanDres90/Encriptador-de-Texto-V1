const mensajeDescifrado = document.querySelector(".mensajeDescifrado")
const mensajeCifrado = document.querySelector(".mensajeCifrado")


function btnEncriptar(){
    const textoEncriptado = encriptar(mensajeDescifrado.value);
    mensajeCifrado.value = textoEncriptado;
    mensajeCifrado.style.backgroundImage = "none"
    mensajeDescifrado.value = ""
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensajeDescifrado.value);
    mensajeCifrado.value = textoEncriptado;
    mensajeDescifrado.value = ""
}





function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo [i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo [i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptar;
}

function copiar (){
    mensajeCifrado.select()
    navigator.clipboard.writeText(mensajeCifrado.value)
    mensajeCifrado = "";
    alert("Texto Copiado");
}


/*btnEncriptar.onclick = encriptar;*/