setInterval(function(){
    $("#img1").toggle();
    },900);

setInterval(function(){
    $("#img2").toggle();
    },1000);

setInterval(function(){
    $("#img3").toggle();
    },900);


$("#animate1").click(function(){
  $("#animate-demo1").animate({backgroundColor: "#aa0000", left:"170px",opacity:"0.5"}, 2000);
  $("#animate-demo1").animate({fontSize:"5em"}, 1000);
});

$("#animate2").click(function(){
  $("#animate-demo2").animate({backgroundColor: "#aa0000", left:"170px",opacity:"0.5"}, 2000);
  $("#animate-demo2").animate({fontSize:"5em"}, 1000);
});


$("#animation-button").click(function() {
    $("#demo1").fadeToggle(1000);
    $("#demo2").fadeToggle(2000);
    $("#demo3").fadeToggle(3000);
    $("#demo4").fadeToggle(4000);
    $("#demo5").fadeToggle(5000);
    $("#demo6").fadeToggle(6000);
    $("#demo7").fadeToggle(7000);
    $("#demo8").fadeToggle(8000);
    $("#demo9").fadeToggle(9000);
    $("#demo10").fadeToggle(10000);
    $("#demo11").fadeToggle(11000);
    $("#demo12").fadeToggle(12000);

});