

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var line1 = $('.line1');
var line2 = $('.line2');

var line1Spans = $('.line1 > span');
var line2Spans = $('.line2 > span');

// Set tweens
TweenMax.set([line1, line2], {
  x: -15
})
TweenMax.set([line1Spans, line2Spans], {
  alpha: 0
})


$('nav').hover(function(){

    $('hgroup h1').fadeOut();
  
  });
    
   