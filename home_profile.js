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




function zoomInAndOut(string) { 
  var image = document.getElementById("img_size") 
  var currentWidth = image.width; 
  var currentHeight = image.height; 
  if (string == "in") { 
    var width = parseInt(currentWidth * 1.1); //10%씩 넓이 증가 
    var height = parseInt(currentHeight * 1.1); //10%씩 높이 증가 
  } 
  else if (string == "out") { 
    var width = parseInt(currentWidth * 0.9); //10%씩 넓이 감소 
    var height = parseInt(currentHeight * 0.9); //10%씩 높이 감소 
  } 
  image.width = width; 
  image.height = height; 
}

$('.rabbit img').bind('click', function(){
        if(this.src == 'rabbit2.gif') this.src = 'rabbit1.gif';
        else $(this).attr('src', 'rabbit2.gif'); // jQuery 로 src 속성값 바꿔보기
    });
 $('.css_test img').bind('click', function(){
        if(this.src == 'rabbit2.gif') this.src = 'rabbit1.gif';
        else $(this).attr('src', 'rabbit2.gif'); // jQuery 로 src 속성값 바꿔보기
    });


function doubleClicked() {
    document.getElementById("dbl-click1").innerHTML = "<strong><em>Name</em></strong> :    Choi Yein";
    document.getElementById("dbl-click2").innerHTML = "<strong><em>School</em></strong> :   Kookmin Univ. Computer Science";
    document.getElementById("dbl-click3").innerHTML = "<strong><em>Age</em></strong> :    23 years";
    document.getElementById("dbl-click4").innerHTML = "<strong><em>Blood-type</em></strong> :    B";
    document.getElementById("dbl-click5").innerHTML = "<strong><em>Height</em></strong> :    164cm";
    document.getElementById("dbl-click6").innerHTML = "<strong><em>Favorite</em></strong> :   Finding good restaurant, movie";
    
}