 function limparCesar(){
     let limpar1 = document.getElementById("input-saida-cesar").innerText = "";
     console.log(limpar1);

}

function limparBase64(){
    let limpar2 = document.getElementById("input-saida").innerText = "";
    console.log(limpar2);
}

document.getElementById("buttonCopiar").addEventListener('click', buttonCopiar);

function copiar() {
  document.getElementById("input-saida-cesar").select();
  document.execCommand("copy");
}

document.getElementById("buttonCopiarBase64").addEventListener('click', buttonCopiarBase64);

function copiarBase64() {
    document.getElementById("input-saida").select();
    document.execCommand("copy");
  }


    function selecionarCodificacao(select){
        if(select.value === "base64"){
            document.getElementById("codebase64").style.display = "block";
            document.getElementById("cesar").style.display = "none";
        } else if (select.value === "cifracesar"){
            document.getElementById("codebase64").style.display = "none";
            document.getElementById("cesar").style.display = "block";
        }
    }    

    function selecionaradio(){
        let selectionRadiobase64 = document.getElementById("msg-base64-crypto");
        let selectionRadiobase64Decoder = document.getElementById("msg-base64-decrypto");
        let select = document.getElementById("crypto-radio");

        let selectionRadioCesar = document.getElementById("msg-cesar-crypto");
        let selectionRadioCesarDecoder = document.getElementById("msg-cesar-decrypto");
        let selectCesar = document.getElementById("crypto-radio-cesar");
        

        if(select.checked){
            selectionRadiobase64.style.display = "block";
            selectionRadiobase64Decoder.style.display = "none";
       } else {
            selectionRadiobase64.style.display = 'none';
            selectionRadiobase64Decoder.style.display = 'block';
        }

        if(selectCesar.checked){
            selectionRadioCesar.style.display = "block";
            selectionRadioCesarDecoder.style.display = "none";
        } else{
            selectionRadioCesar.style.display = "none";
            selectionRadioCesarDecoder.style.display = "block";
        }

    }

    

    function encoderBase(){
        var texto = "";
        var texto = document.getElementById('input-texto').value;
        var embase64 = btoa(texto);
        document.getElementById("input-saida").textContent = embase64;
        };





    function decoderBase(){
        var texto = "";
        var texto = document.getElementById('input-texto').value;
        var decoder64 = atob(texto);
        document.getElementById("input-saida").textContent = decoder64;
        };


 function cesarEncoder(){

  
    let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let frase = document.getElementById("entrada-name").value.toLowerCase();
    let off = document.getElementById("key-entrada").value;
    let number = parseInt(off);
    let guarda = [];

    for (let i = 0; i < frase.length; i++){
        if(frase[i] != ' '){
            for (let j = 0; j < alfabeto.length; j++){
                if (frase[i] == alfabeto[j]){
                  guarda[i] = alfabeto[(j + number) % alfabeto.length];
                  break
                }       
            }
        }
        else
        {
          guarda[i] = ' ';
        }
    } 
      
    let key = guarda.join("");  
    document.getElementById("input-saida-cesar").innerHTML = key;

}

function cesarDecoder(){
    let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let frase = document.getElementById("entrada-name").value.toLowerCase();
    let off = document.getElementById("key-entrada").value;
    let x = parseInt(off);
    var offNew = alfabeto.length - (x % alfabeto.length);
    let guarda = [];


    for (let i = 0; i < frase.length; i++){
        if(frase[i] != ' '){
            for (let j = 0; j < alfabeto.length; j++){
                if (frase[i] == alfabeto[j]){
                  guarda[i] = alfabeto[(j + offNew) % alfabeto.length];
                  break;
                }       
            }
        }
        else
        {
          guarda[i] = ' ';
        }
    } 
      
    let key = guarda.join("");  
    document.getElementById("input-saida-cesar").innerHTML = key;
}