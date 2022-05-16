const body = document.querySelector("body");
const productsContent = document.querySelector(".products-content");
const fruits = document.querySelector("#fruits");
const drinks = document.querySelector("#drinks");
const hygiene = document.querySelector("#hygiene");
const main = document.querySelector("#container"); 

function loadPage (arrayObjetos) {

  for (let i = 0; i < arrayObjetos.length; i++) {
    // loadObject(arrayObjetos[i]);
    const objeto = arrayObjetos[i];

    const objCategory = arrayObjetos[i].category

    const loadedObject = loadObject(objeto);

    if (objCategory === 'Frutas') {
      fruits.appendChild(loadedObject);
    } else if (objCategory === 'Bebidas') {
      drinks.appendChild(loadedObject);
    } else if (objCategory === 'Higiene') {
      hygiene.appendChild(loadedObject);
    }

  }
}


function loadObject (objeto) {
  // RECUPERANDO AS INFORMAÇÕES DO PRODUTO
  const title            = objeto.title;
  const price            = objeto.price;
  const category         = objeto.category;
  const image            = objeto.image;
  const imageDescription = objeto.imageDescription;
  
  // CRIANDO ELEMENTOS
  const li               = document.createElement("li");
  const productImg       = document.createElement("img")
  const productMain      = document.createElement("main");
  const productTitle     = document.createElement("h1");
  const productCategory  = document.createElement("h5");
  const productPrice     = document.createElement("strong");
  
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
  li.classList.add("product")

  // Conteúdo dos Textos
  productTitle.innerText = title;
  productCategory.innerText = category;
  productPrice.innerText = `R$ ${price}`;

  // MONTAGEM DA SEÇÃO 
  li.appendChild(productImg);
  li.appendChild(productMain);
  productMain.appendChild(productTitle);
  productMain.appendChild(productCategory);
  productMain.appendChild(productPrice);

  // RETORNO ESTRUTURA MONTADA
  return li;
}


loadPage(products);