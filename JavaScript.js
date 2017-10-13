var lista = [];
var div = document.getElementById("lista");
var result = "";
function add() {
        var nome = document.getElementById("Nome").value;
        var numero = document.getElementById("Numero").value;
        if (nome == NaN || nome == null || nome == "" || numero == NaN || nome == numero || numero == "") {
            alert("erro");
        }
        else {
            lista.push("Nome: "+nome + " - Telefone: " +numero);
			result="";
            for (var i = 0; i < lista.length; i++) {
                result = result + "<li class='mdl-list__item'>" +
				"<span class='mdl-list__item-primary-content'>"+
				"<i class='material-icons mdl-list__item-icon'>person</i>" +
				lista[i] + "</span></li>";
            }
            imprime();
        }   
}
function remover() {
	div.innerHTML = "";
    var result = "";
	lista = [];
}
function imprime() {
    div.innerHTML = result;
}