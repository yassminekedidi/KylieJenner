const showPopupBtn = document.getElementById('showPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

function showPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

showPopupBtn.addEventListener('click', showPopup);
closeBtn.addEventListener('click', closePopup);

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});
const products = [
    {
        producttext:"best-seller",
        productPicture: "bebe1.webp",
        productstar:"★★★★☆",
        productTitle: "shampoing doux",
        productdesc:"8 onces liquides | nettoyer + soigner",
        productprice:"17$",
        productbutton:"ajouter au pannier"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe2.webp",
        productstar:"★★★★☆",
        productTitle: "après-shampooing doux",
        productdesc:"8 onces liquides | conditionner + nourrir",
        productprice:"17$",
        productbutton:"ajouter au pannier"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe3.webp",
        productstar:"★★★★☆",
        productTitle: "lotion hydratante",
        productdesc:"8 onces | nourrir + soulager",
        productprice:"17$",
        productbutton:"ajouter au pannier"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe4.webp",
        productstar:"★★★★☆",
        productTitle: "pack de soins capillaires",
        productdesc:"les essentiels de soins capillaires",
        productprice:"30,50$",
        productbutton:"ajouter au pannier",
        productpromo:"34$"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe5.webp",
        productstar:"★★★★☆",
        productTitle: "mini-ensemble bébé",
        productdesc:"nettoyer + soigner en déplacement",
        productprice:"35$",
        productbutton:"ajouter au pannier"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe6.webp",
        productstar:"★★★★☆",
        productTitle: "serviette de bain à capuche",
        productdesc:"essentiel du bain",
        productprice:"30",
        productbutton:"ajouter au pannier"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe7.webp",
        productstar:"★★★★☆",
        productTitle: "ensemble mini bébé - rose",
        productdesc:"les essentiels de puériculture",
        productprice:"85,50$",
        productbutton:"ajouter au pannier",
        productpromo:"395$"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe8.webp",
        productstar:"★★★★☆",
        productTitle: "lot collection complète bébé – rose",
        productdesc:"les essentiels de puériculture",
        productprice:"99,50$",
        productbutton:"ajouter au pannier",
        productpromo:"111$"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe9.webp",
        productstar:"★★★★☆",
        productTitle: "valise de voyage",
        productdesc:"essentiel de voyage",
        productprice:"30$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"best-seller",
        productPicture: "bebe10.webp",
        productstar:"★★★★☆",
        productTitle: "lot bébé 3 pièces",
        productdesc:"les essentiels de puériculture",
        productprice:"45,50$",
        productbutton:"ajouter au pannier",
        productpromo:"51$"
    },
    {
        producttext:"nouveau",
        productPicture: "bebe11.webp",
        productstar:"★★★★☆",
        productTitle: "brosse à cheveux démêlante",
        productdesc:"démêle en douceur",
        productprice:"12$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"best-seller",
        productPicture: "bebe12.webp",
        productstar:"★★★★☆",
        productTitle: "stick lèvres et joues",
        productdesc:"0,42 onces | apaiser + adoucir",
        productprice:"14$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"best-seller",
        productPicture: "bebe13.webp",
        productstar:"★★★★☆",
        productTitle: "serviette de bain à capuche",
        productdesc:"essentiel du bain",
        productprice:"30$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"exclusivité en ligne",
        productPicture: "bebe14.webp",
        productstar:"★★★★☆",
        productTitle: "lot collection complète bébé – bleu",
        productdesc:"les essentiels de puériculture",
        productprice:"99,50$",
        productbutton:"ajouter au pannier",
        productpromo:"111$"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe15.webp",
        productstar:"★★★★☆",
        productTitle: "ensemble mini bébé - bleu",
        productdesc:"les essentiels de puériculture",
        productprice:"85,50$",
        productbutton:"ajouter au pannier",
        productpromo:"95$"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe16.webp",
        productstar:"★★★★☆",
        productTitle: "valise de voyage",
        productdesc:"essentiel de voyage",
        productprice:"30$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"exclusivité en ligne",
        productPicture: "bebe17.webp",
        productstar:"★★★★☆",
        productTitle: "pack essentiels de soins capillaires",
        productdesc:"les essentiels de soins capillaires",
        productprice:"41$",
        productbutton:"ajouter au pannier",
        productpromo:"46$"
    },
    {
        producttext:"best-seller",
        productPicture: "bebe18.webp",
        productstar:"★★★★☆",
        productTitle: "cserviette de bain à capuche",
        productdesc:"essentiel du bain",
        productprice:"30$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"best-seller",
        productPicture: "bebe19.webp",
        productstar:"★★★★☆",
        productTitle: "baume apaisant",
        productdesc:"3 onces liquides | calmer + hydrater",
        productprice:"18$",
        productbutton:"ajouter au pannier",
    },
    {
        producttext:"en rupture de stock",
        productPicture: "bebe20.webp",
        productstar:"★★★★☆",
        productTitle: "ensemble bébé kylie",
        productdesc:"coffret cadeau essentiel pour bébé",
        productprice:"58$",
        productbutton:"ajouter au pannier",
    },
    
]

const productsElement =document.getElementById("products1")
const count_counter = document.querySelector(".count") 
const count_number = document.querySelector(".count-number") 


count_counter.style.display = "none"
const cart = [];
const popup_content_table = document.querySelector(".content-table") 
let count = 0 ; 
console.log(popup_content_table)


function addToCart(productTitle) {

    const product = products.find(function (product) {
        
        return product.productTitle === productTitle
    })
    if(product) {
        count +=  1 
        count_counter.style.display = "block"  
        count_number.innerHTML = count
        cart.push(product) 
        const row1 = document.createElement('tr') 
        const  name = document.createElement('td')
         name.textContent = product.productTitle
         name.style.paddingLeft = "25px"
         row1.appendChild(name)

         const price = document.createElement('td')
         price.textContent = product.productprice 
         price.style.paddingLeft = "75px"
         row1.appendChild(price)
         
         

         popup_content_table.appendChild(row1)
         
        console.log(`${product.productTitle} is added to carde `)

    }else {
        console.log("lee")
    }  
    }
function addQuantity(productTitle){
    const product = products.find(function (product) {
        
        return product.productTitle === productTitle
    })
    
    if(product){
        let price = parseInt(product.productprice) 
         return product.productprice = price +price 
        
    }
    else{
        console.log("lee makch khaadeem")
    }
    

}


for (const product of products) {
    productsElement.innerHTML += `
    <div class="cart">
    <div class="mySlides fade">
      <div class="numbertext">${product.producttext}</div>
      <img src="${product.productPicture}" />
      <div class="star">${product.productstar}</div>
      <div class="text">
        <h5 class = "" >${product.productTitle}</h5>
        <span>${product.productdesc}</span>
        <h4>${Object.keys(product).includes("productpromo")? product.productpromo: product.productprice}
        <button class =" plus-button" onclick ="addQuantity('${product.productTitle}')">+</button>
        <span style="text-decoration: line-through; margin-left: 15px; margin-top:-19px; color: red; ">${Object.keys(product).includes("productpromo")? product.productprice: ''}</span>
        </h4>
      </div>
      <div class="btn">
        <button onclick="addToCart('${product.productTitle}')">${product.productbutton}</button>

      </div>
    </div>
  </div>
    `
    
}