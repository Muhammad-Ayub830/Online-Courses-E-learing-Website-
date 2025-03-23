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