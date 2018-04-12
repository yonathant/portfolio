$(document).ready(function(){

$('#first-proj').hide();
$('#second-proj').hide();
$('#third-proj').hide();
$('#fourth-proj').hide();
$('#fifth-proj').hide();
$('#sixth-proj').hide();
$('.nav1').addClass("active");

$('#section-1').waypoint(function() {
    $(".nav-icon").removeClass("active");
    $(".nav1").addClass("active");
  }, { offset: -40 });

 $('#section-2').waypoint(function() {
    $(".nav-icon").removeClass("active");
    $(".nav2").addClass("active");
  }, { offset: 250 });
  
  $('#section-3').waypoint(function() {
    $(".nav-icon").removeClass("active");
    $(".nav3").addClass("active");
  }, { offset: 250 });
  
  $('#section-4').waypoint(function() {
    $(".nav-icon").removeClass("active");
    $(".nav4").addClass("active");
  }, { offset: 400 });
/*
Smooth scrolling
*/

$(".nav1").click(function() {
    $(".nav-icon").removeClass("active");
    $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#section-1").offset().top-65
     }, 300);
  return false;
 });

$(".nav2").click(function() {
    $(".nav-icon").removeClass("active");
    $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#section-2").offset().top-250
     }, 300);
  return false;
 });

$(".nav3").click(function() {
    $(".nav-icon").removeClass("active");
    $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#section-3").offset().top-250
     }, 300);
  return false;
 });

$(".nav4").click(function() {
    $(".nav-icon").removeClass("active");
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#section-4").offset().top-100
     }, 300);
  return false;
 });
  


 $(".first-thumb").click(function() {
    $("#first-proj").fadeIn("fast");
    return false;
 });
 $(".first-exit").click(function() {
    $("#first-proj").fadeOut("fast");
    return false;
 });

 $(".second-thumb").click(function() {
    $("#second-proj").fadeIn("fast");
    return false;
 });
 $(".second-exit").click(function() {
    $("#second-proj").fadeOut("fast");
    return false;
 });  

 $(".third-thumb").click(function() {
    $("#third-proj").fadeIn("fast");
    return false;
 });
 $(".third-exit").click(function() {
    $("#third-proj").fadeOut("fast");
    return false;
 });  

 $(".fourth-thumb").click(function() {
    $("#fourth-proj").fadeIn("fast");
    return false;
 });
 $(".fourth-exit").click(function() {
    $("#fourth-proj").fadeOut("fast");
    return false;
 }); 

 $(".fifth-thumb").click(function() {
    $("#fifth-proj").fadeIn("fast");
    return false;
 });
 $(".fifth-exit").click(function() {
    $("#fifth-proj").fadeOut("fast");
    return false;
 }); 

 $(".sixth-thumb").click(function() {
    $("#sixth-proj").fadeIn("fast");
    return false;
 });
 $(".sixth-exit").click(function() {
    $("#sixth-proj").fadeOut("fast");
    return false;
 }); 
});
/*function myFunction() {
    var input = document.getElementById('Text1').value;
    var count = document.getElementById('Text2').value;
    var result = 0;
    var strong = "";
    if(input!="" && count!="") {
    for(var i=0; i<input.length; i++) 
    {
        if (input[i] == count)
        {
            result++;
        }
    }
    if(result>=3) {
        strong = "!!!";
    }
    document.getElementById('myDiv').innerHTML = 'האות ' + count + ' מופיעה ' + result + ' פעמים' + strong;
    }
}

function myFunction2() {
    var input = document.getElementById('Text1').value;
    var count = document.getElementById('Text2').value;
    var i = 0;
    if(input!="" && count!="") {
    while(input[i]!=count){
        i++;
    }
    document.getElementById('myDiv').innerHTML = i+1;
    }
}
/*

// function myFunction() {
//     var a = parseInt(document.getElementById('Text1').value);
//     var b = parseInt(document.getElementById('Text2').value);
//     var result = 0;
//     var counter = 0;
//     while (counter < a) {
//         result = result + b;
//         counter++;
//     }
//     // for(var i=1; i<=a; i++) {
//     //     result = result + b;
//     // }
//     document.getElementById('myDiv').innerHTML = result.toString();
// }

// function myFunction() {
//     var z;
//     var Type = document.getElementById('Text1').value.toString();
//     var x = parseFloat(document.getElementById('Text2').value);
//     var y = parseFloat(document.getElementById('Text3').value);
//     if(Type=='c')
//     {
//         var z = x*3.14;
//     }
//     if(Type=='r')
//     {
//         var z = x*y;

//     }
//     document.getElementById('div1').innerHTML = z.toString();
// }
/*
var myCounter = 1;
var myGrade = 0;
function myFunction(){
    var x = parseFloat(document.getElementById('Text1').value);
    myGrade = myGrade + x;

    if(myCounter == 3)
    {
        document.getElementById('div1').innerHTML = (myGrade / 3).toString();
    }
    else {
        document.getElementById('div1').innerHTML=myCounter.toString();
        myCounter = myCounter + 1;
    }

}
function loadFunction() {
    document.getElementById('div1').innerHTML = myCounter.toString();

}*/