menu = document.querySelector(".menu");
menuBtn=document.querySelector(".header__icon");
menuBtnIcon=document.querySelector(".header__icon i");;

menuBtn.addEventListener('click',function(){
    if(  menuBtnIcon.classList.contains("fa-bars")){
        menuBtnIcon.classList.remove("fa-bars");
        menuBtnIcon.classList.add("fa-times");
        menu.style.left="0";
        

    }else{
       
        menuBtnIcon.classList.add("fa-bars");
        menuBtnIcon.classList.remove("fa-times");
        menu.style.left="-256px";

    }

    
});