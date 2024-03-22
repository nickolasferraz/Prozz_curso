document.addEventListener("DOMContentLoaded", function () {
  // Seu código JavaScript aqui
  const titulo = document.createElement("h1");
  titulo.textContent = "Produto em Promoção";
  titulo.id = "titulo"; // Atribuindo o id diretamente
  document.body.appendChild(titulo);

  const produto = document.createElement("div");
  produto.classList.add("produto");

  const nome = document.createElement("h2");
  nome.textContent = "Smartphone XYZ";
  produto.appendChild(nome);

  const descricao = document.createElement("p");
  descricao.textContent =
    "Um smartphone de última geração, com câmera de alta resolução e bateria de longa duração.";
  produto.appendChild(descricao);

  const preco = document.createElement("p");
  preco.textContent = "Preço: R$ 1.299,00";
  produto.appendChild(preco);

  // Adicionar a imagem do produto (exemplo)
  const imagem = document.createElement("img");
  imagem.src = "caminho/para/imagem.jpg";
  produto.appendChild(imagem);

  document.body.appendChild(produto); // Adicionando o produto ao body
});
