function descriptografar(){
    
    var txtColado = document.getElementById("entrada").value;
    
    if (txtColado != "") {
        var txtCripto = txtColado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("resultado").style.display = "block";
        document.getElementById("sem-resultado").style.display = "none";
        document.getElementById("saida").value = txtCripto;
        document.getElementById("entrada").value = "";
    } else {
        document.getElementById("aviso").value = "Digite ou Cole Algo Para Descriptografar";
    }
}