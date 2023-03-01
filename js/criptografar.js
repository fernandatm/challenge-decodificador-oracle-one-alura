

function criptografar(){

    var txtDigitado = document.getElementById("entrada").value;
     
    if (txtDigitado != "") {
        var txtCripto = txtDigitado.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
        document.getElementById("resultado").style.display = "block";
        document.getElementById("sem-resultado").style.display = "none";
        document.getElementById("saida").value = txtCripto;
        document.getElementById("entrada").value = "";

    } else {
        document.getElementById("sem-resultado").style.display = "block";
        document.getElementById("resultado").style.display = "none";
    }
}