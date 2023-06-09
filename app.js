const slidermain = document.querySelector(".slidermain");
const manu_item= document.querySelectorAll(".manu-item");


manu_item.forEach((item, index)=>{
   item.addEventListener("click",()=>{
    slidermain.style.transform=`translateX(${-100 * index}vw)`
   })
})