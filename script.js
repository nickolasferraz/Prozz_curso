document.addEventListener("DOMContentLoaded", function() {
    // Capturando os elementos do HTML
    const titulo = document.getElementById("titulo");
    const listaNaoOrdenada = document.querySelector("ul");
    const link = document.getElementById("link");
    const listaOrdenada = document.getElementById("lista-ordenada");

    // Adicionando conteúdo textual aos elementos
    titulo.innerText = "Título do Projeto";
    link.innerText = "Link para Proz Educação";

    // Adicionando itens simples na lista não ordenada
    listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

    // Adicionando itens com links para outros sites na lista ordenada
    listaOrdenada.innerHTML = "<li><a href='https://www.example.com'>Link 1</a></li><li><a href='https://www.example.org'>Link 2</a></li><li><a href='https://www.example.net'>Link 3</a></li>";
});
