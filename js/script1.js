function showDiv() {
  var x = document.getElementById("summary");
  var y = document.getElementById("lifestory");

  
  if (x.style.display === "none") {
    x.style.display = "";
     y.style.display = "none"
  } 
   
}
     


function show2Div() {
  var x = document.getElementById("summary");
  var y = document.getElementById("lifestory");

  
  if (y.style.display === "none") {
    y.style.display = "";
     x.style.display = "none"
  } 
 
   
}

var speed = 'slow';

$('html, body').hide();

$(document).ready(function () {
    $('html, body').fadeIn(speed, function () {
        $('a[href], button[href]').click(function (event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function () {
                window.location = url;
            });
        });
    });
});
