function buscarProdutos() {
    const nomeBusca = document.getElementById("nomeBusca").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto");
  
    produtos.forEach(produto => {
      const nomeProduto = produto.querySelector(".produto-titulo").textContent.toLowerCase();
      const descricaoProduto = produto.querySelector(".produto-descricao").textContent.toLowerCase();
  
      if (nomeProduto.includes(nomeBusca) || descricaoProduto.includes(nomeBusca)) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  }
  
  const campoBusca = document.getElementById("nomeBusca");
  campoBusca.addEventListener("input", buscarProdutos);
  
  
  function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll(".produto");
  
    produtos.forEach(produto => {
      const categoriaProduto = produto.dataset.categoria;
  
      if (categoria === "todos" || categoriaProduto === categoria) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  }
    