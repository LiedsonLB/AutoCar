const valueProduto = document.getElementById("value-produto");
const quantidadeProduto = document.getElementById("quantidade-produto");


//alterando valor total
quantidadeProduto.addEventListener("keyup", () => {
    var Price = 200;
    value = quantidadeProduto.value * Price;
    if(value < 1){
        valueProduto.innerHTML = "Total: R$ " + "0";
    }
    else{
        valueProduto.innerHTML = "Total: R$ " + value + ",00";
    }
})
quantidadeProduto.addEventListener("change", () => {
    var Price = 200;
    value = quantidadeProduto.value * Price;
    if(value < 1){
        valueProduto.innerHTML = "Total: R$ " + "0";
    }
    else{
        valueProduto.innerHTML = "Total: R$ " + value + ",00";
    }
})

// Seleciona todos os elementos com a classe "plus-img"
var plusImg = document.querySelectorAll(".plus-img");
  
// Seleciona a imagem principal
const mainImg = document.getElementById("main-img");

// Adiciona evento de clique e foco a cada botão de troca
for (var i = 0; i < plusImg.length; i++) {
    plusImg[i].addEventListener("click", function() {
      // Obtém a "src" da imagem clicada
      var novaSrc = this.src;

      // Altera a "src" da imagem principal para a nova imagem desejada
      mainImg.src = novaSrc;

      // Remove o foco de todos os elementos com a classe "plus-img"
      for (var j = 0; j < plusImg.length; j++) {
        plusImg[j].classList.remove("focus");
      }

      // Adiciona o foco ao elemento clicado
      this.classList.add("focus");
    });

    plusImg[i].addEventListener("click", function() {
      // Adiciona o foco ao elemento com a classe "plus-img" que está com o foco
      this.classList.add("focus");
    });

    plusImg[i].addEventListener("blur", function() {
      // Remove o foco do elemento com a classe "plus-img" que perdeu o foco
      this.classList.remove("focus");
    });
  };
