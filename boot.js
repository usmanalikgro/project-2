$(document).ready(function(){


    // $(window).scroll(function(){
    //     let a = $(window).scrollTop()
        
    //     if(a>100){
    //         $(".nav").css("height","67px","background","red")
    //         $(".logo").css("margin-top","15px")
    //         $("#mn-li").css("margin-top", "10px")
    //         $("#mn-li").css("padding-bottom","3px")
    //     }

    //     else{
    //         $(".nav").css("height","95px")
    //         $(".logo").css("margin-top","25px")
    //         $("#mn-li").css("margin-top", "20px")
    //         $("#mn-li").css("padding","0")
    //     }
    // })
   



    $(window).scroll(function(){

        let b = $(window).scrollTop()

        if(b>500){
            $(".top-scrollicon").css("display","block")
            
            $(".top-scrollicon").click(function(){
                $(window).scrollTop("0")
            })
        }    
        else{
            $(".top-scrollicon").css("display","none")
        } 

    })

})

// js
nav = document.querySelector(".nav")
menu = document.querySelector(".menu")
hamberg = document.querySelector("#hamberg")

hamberg.addEventListener("click",()=>{
    nav.classList.toggle('h-nav-resp');
    menu.classList.toggle('v-resp');
    
})