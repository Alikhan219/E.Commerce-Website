const slidermain = document.querySelector(".slidermain");
const manu_item= document.querySelectorAll(".manu-item");

const product=[
   {
      id: 1,
      title: "ARTEM",
      price: 200,
      colors:[
         {
            col: "burlywood",
            img: "./Untitledm1.png"
         },
         {
            col: "rgb(104, 177, 104)",
            img: "./Untitledm1 (2).png"
         }
      ]
   },
   {
      id: 2,
      title: "HUMMEL",
      price: 180,
      colors:[
         {
            col: "blue",
            img: "./Untitledm4.png"
         },
         {
            col: "black",
            img: "./Untitledm4 (2).png"
         }
      ]
   },
   {
      id: 3,
      title: "BURCKEL",
      price: 150,
      colors:[
         {
            col: "white",
            img: "./Untitledm3.png"
         },
         {
            col: "black",
            img: "./Untitledm3 (2).png"
         }
      ]
   },
   {
      id: 4,
      title: "SUPERRES",
      price: 250,
      colors:[
         {
            col: "rgb(147, 165, 42)",
            img: "./Untitlednew.png"
         },
         {
            col: "black",
            img: "./Untitlednew (2).png"
         }
      ]
   },
   {
      id: 5,
      title: "WANGANG",
      price: 190,
      colors:[
         {
            col: "red",
            img: "./Untitledm5.png"
         },
         {
            col: "black",
            img: "./Untitledm5 (2).png"
         }
      ]
   }
]




let selProduct= product[0];

const productimg= document.querySelector(".product-Img")
const productTitle= document.querySelector(".product-title")
const productPrice= document.querySelector(".product-price")
const productColor= document.querySelectorAll(".color");

manu_item.forEach((item, index)=>{
   item.addEventListener("click",()=>{
    slidermain.style.transform=`translateX(${-100 * index}vw)`;
    selProduct= product[index];
    productTitle.textContent= selProduct.title;
    productPrice.textContent=  "$" + selProduct.price;
    productimg.src= selProduct.colors[0].img;
    productColor.forEach((color,index) =>{
      color.style.backgroundColor= selProduct.colors[index].col;
   })
   })
})

productColor.forEach(function(color, index){
          color.addEventListener("click", ()=>{
            productimg.src= selProduct.colors[index].img;
          })
})