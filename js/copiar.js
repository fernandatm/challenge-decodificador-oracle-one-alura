async function copiar() {
	
	let text = document.getElementById("saida").value;
	await navigator.clipboard.writeText(text);
	document.getElementById("saida").value = "";
	document.getElementById("entrada").value = "";
	document.getElementById("sem-resultado").style.display = "block";
	document.getElementById("resultado").style.display = "none";
	}

function share(){
	if (navigator.share !== undefined) {
		navigator.share({title: "", text: "", url: "",})
	}
}