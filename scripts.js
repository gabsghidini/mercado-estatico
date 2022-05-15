const body = document.querySelector("body");
const main = document.querySelector(".container");

function loadSection (category) {
  /*

  section class products section
  ul
  
  */
}

function loadObject (objeto) {
  // RECUPERANDO AS INFORMAÇÕES DO PRODUTO
  const title            = objeto.title;
  const price            = objeto.price;
  const category         = objeto.category;
  const image            = objeto.image;
  const imageDescription = objeto.imageDescription;
  
  // CRIANDO ELEMENTOS
  const li = document.createElement("li");
  const productImg = document.createElement("img")
  const productMain = document.createElement("main");
  const productTitle = document.createElement("h1");
  const productCategory = document.createElement("h5");
  const productPrice = document.createElement("strong");

  // ADICIONANDO AS INFORMAÇÕES
    // Informações da Imagem
  productImg.src = objeto.image === undefined ? './img/products/no-img.svg' : image;
  productImg.alt = objeto.imageDescription === "" ? title : imageDescription;
  productImg.title = title;
  productImg.classList.add("product-img");
    // Informações dos Textos
  productMain.classList.add("product-main")
  productTitle.classList.add("product-title");
  productCategory.classList.add("product-category");
  productPrice.classList.add("product-price");

  


  // MONTAGEM DA SEÇÃO 
  

  // LOOP 


  // RETORNO ESTRUTURA MONTADA

  return li;
}

const objetoTeste = {
  title: "Uva Crimson",
  price: 8.99,
  category: "Frutas",
  image: undefined,
  imageDescription: "",
}

loadObject(objetoTeste)

/* 
  
<li class="product">
<img
  src="./img/productsss/no-img.svg"
  alt=""
  title=""
  class="product-img"
/>
<main class="product-main">
  <h1 class="product-title">Uva Crimson</h1>
  <h5 class="product-category">Frutas</h5>
  <strong class="product-price">R$ 8.99</strong>
</main>
</li>

*/