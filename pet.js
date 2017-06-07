setInterval(function(){
    $("#blink").toggle();
  }, 400);

$("#flip").click(function () {
    $("#panel").slideToggle(5000);
});

