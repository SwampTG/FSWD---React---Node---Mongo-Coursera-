$(document).ready(()=>{
    // Carousel cycle speed
    $("#mycarousel").carousel({interval:2000});
    // Change the button and the behaviour when clicked 
    $("#carouselButton").click(()=>{
        if($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton")
              .children("span")
              .removeClass("fa-pause")
              .addClass("fa-play");
        }
        else {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play")
              .addClass("fa-pause");
        }
    });
    // Reserve Modal trigger
    $("#reserveButton").click(()=>{
        $("#reserveModal").modal();
    });
    //dismiss reserve
    $("#dismissReserve").click(()=>{
        $("#reserveModal").modal("hide");
    });
    $("#cancelReserve").click(()=>{
        $("#reserveModal").modal("hide");
    });
    // Login modal Trigger
    $("#loginButton").click(()=>{
        $("#loginModal").modal();
    });
    // dismiss login
    $("#dismissLogin").click(()=>{
        $("#loginModal").modal("hide");
    });
    $("#cancelLogin").click(()=>{
        $("#loginModal").modal("hide");
    });
});