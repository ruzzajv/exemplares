function gerarTabela() {
    var i = 1;
    var tabela = document.getElementById("tabela");
    var row = tabela.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    var nome = document.getElementById("textbox").value;
    
    var sortNome = function(texto) {
        return texto.split('').sort().join('').toUpperCase();
    };

    row.setAttribute("id","primeiraLinha");
    cell1.innerHTML = nome;
    cell2.innerHTML = sortNome(nome);

}

function excluirCelula() {
    var i = 1;
    var primeiraLinha = document.getElementById("primeiraLinha");
    document.getElementById("primeiraLinha").remove();
}