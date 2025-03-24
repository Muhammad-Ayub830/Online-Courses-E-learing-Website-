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
            if(pic[i].src == plus){
                pic[i].src = minus
            }else{
                pic[i].src = plus;
            }
            card.classList.toggle("activeee")
        }
    }
  })
})
// ---------logics for toggle button------
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
// ---------logics for scrolling to top button----------
let mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
    
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}