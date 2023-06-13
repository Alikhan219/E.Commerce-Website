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
            img: "./Untitledm1.png"
         }
      ]
   }
]







manu_item.forEach((item, index)=>{
   item.addEventListener("click",()=>{
    slidermain.style.transform=`translateX(${-100 * index}vw)`
   })
})