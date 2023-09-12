let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let cartItemsEle = document.getElementById("cart-items");
let totalEle = document.getElementById("total");
let valueElement = document.getElementById("value");
let numberElement = document.getElementById("number");
let buttonelement = document.getElementById("button1");
let exp = document.getElementById("addhere");

$ = function(id) {
    return document.getElementById(id);
}
  
var show = function(id) {
    $(id).style.display ='block';
    document.body.style.overflow = "hidden";

}
var hide = function(id) {
    document.body.style.overflow = "visible";
    $(id).style.display ='none';
}

function copyToClipboard(element) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("FOOD MUNCH 25");
}  

let array = [
    {item : "Crispy Corn",
     imageUrl : "images/corn.jpeg",
     cost : 1
    },
    {item : "Chicken Curry",
     imageUrl : "images/Chicken_Curry.jpeg",
     cost : 2
    },
    {item : "Chicken Biryani",
    imageUrl : "images/Chicken_biryani.jpeg",
    cost : 3
    },
    
  ];
  

  

 
 
 function addtomenu(obj)
 {
    let costvalue =totalEle.textContent;
    let count;
     let {item,imageUrl,cost} = obj;
     let divelement1 = document.createElement("div");
     let divelement2 = document.createElement("div");
     divelement2.classList.add("h-100");
     let imageEle = document.createElement("img");

     let headerEle = document.createElement("h1");
     headerEle.textContent = item;
     headerEle.classList.add("explore-menu-tittle");
     let buttonEle = document.createElement("button");
     buttonEle.textContent = "Add to Cart";
     buttonEle.classList.add("btn" , "btn-primary");
     buttonEle.addEventListener("click" , function()
     {
        let parsednumber = parseInt(numberElement.textContent);
        parsednumber++;
        numberElement.textContent = parsednumber;
        let parsedvalue = parseInt(totalEle.textContent);
        parsedvalue = parsedvalue  + cost;
        totalEle.textContent = parsedvalue;
        let liElement = document.createElement("li");
        let imageELement = document.createElement("img");
        imageELement.src = imageUrl;
        imageELement.style.width = 60+"px";
        imageELement.classList.add("round-image");  
        let h5Element = document.createElement("h5");
        h5Element.textContent = item; 
        h5Element.classList.add("h5-element");  
        let paraElement = document.createElement("p");
        paraElement.textContent = cost;
        paraElement.classList.add("h5-element");
        
        let numberpara = document.createElement("p");
        numberpara.textContent ="1";
        numberpara.classList.add("h5-element");
        let minusElement = document.createElement("button");
        minusElement.textContent = "-";
        minusElement.classList.add("signbutton")
        minusElement.addEventListener("click" , function()
        {
            count = parseInt(numberpara.textContent);
            count--;
            numberpara.textContent = count;
            if(count <= 0)
            {
                numberpara.textContent = "0";   
            }
            if(count>=0)
            {
                let y = parseInt(totalEle.textContent);
                y=y-cost;
                totalEle.textContent = y;

            }
            
        }) 
        let plusElement = document.createElement("button");  
        plusElement.textContent = "+";
        plusElement.classList.add("signbutton");
        plusElement.addEventListener("click" , function()
        {
            count = parseInt(numberpara.textContent);
            count++;
            numberpara.textContent = count;
            let x = parseInt(totalEle.textContent);
            x= x+cost;
            totalEle.textContent = x;

        }) 
        liElement.appendChild(imageELement);
        liElement.appendChild(h5Element);
        liElement.appendChild(paraElement);
        liElement.appendChild(minusElement);
        liElement.appendChild(numberpara);
        liElement.appendChild(plusElement);
        liElement.classList.add("d-flex", "flex-row","mb-3");
        cartItemsEle.appendChild(liElement);
     })
     imageEle.src = imageUrl;
     divelement1.classList.add("col-12", "col-md-6", "col-lg-3" , "mb-3");
     divelement2.classList.add("explore-menu-card", "shadow", "mb-3" );
     imageEle.classList.add("w-100","image-border" , );
     divelement2.appendChild(imageEle);
     divelement2.appendChild(headerEle);
     divelement2.appendChild(buttonEle);
     divelement1.appendChild(divelement2);
     exp.appendChild(divelement1);
    
 }
 
 for(let each of array)
 {
     addtomenu(each);
 }






openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
    openShopping.classList.add("none");
    quantity.classList.add("none");
    
    
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
    openShopping.classList.remove("none");
    quantity.classList.remove("none");
})

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}