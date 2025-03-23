var orderList = document.getElementById("orderList");
console.log(orderList);
var menu_btn = document.getElementById("toggle_btn")
console.log(menu_btn)
menu_btn.addEventListener('click',function(){
    if(orderList.style.height == "0px"){
 orderList.style.height = "270px"
    }else{
         orderList.style.height = "0px"
    }
   
})
// // --------logics for the accordian section ----------------
var cardItme = document.querySelectorAll(".faq-card");
var cardheader = document.querySelectorAll(".faq-card .header");
var cardContent = document.querySelectorAll(".faq-card .data");
var pic = document.querySelectorAll(" .header img")
var  plus = document.getElementById("openee").src;
var  minus = document.getElementById("closee").src;
console.log(plus)
console.log(minus)
cardItme.forEach(function(card){
   var title = card.querySelectorAll(".header")
   var content = card.querySelectorAll(".data")

  card.addEventListener('click',function(){
  
    for(var i= 0; i<cardItme.length;i++){

        if(cardItme[i]!=card){
           cardItme[i].classList.remove("activeee")
        }else{
            // img in of close and open 
            if(pic[i].src == plus){
                pic[i].src = minus
            }else{
                pic[i].src = plus;
            }
            // toggling the area of content
            card.classList.toggle("activeee")
        }
    }

  })
})