$(document).ready(function() {
    $('#pop_bt').click(function() {
     $('#pop').show();
    });
    $('#close').click(function() {
     $('#pop').hide();
    });
   });


setTimeout(function() { 
    $('#list1').removeAttr('hidden');},1000);
setTimeout(function() { 
    $('#list2').removeAttr('hidden');},2000);
setTimeout(function() { 
    $('#list3').removeAttr('hidden');},3000);
setTimeout(function() { 
    $('#list4').removeAttr('hidden');},4000);
setTimeout(function() { 
    $('#list5').removeAttr('hidden');},5000);


setInterval(function(){
    $("#blink").toggle();
  }, 500);

