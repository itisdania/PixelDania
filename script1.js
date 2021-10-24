
function showDiv() {
  var x = document.getElementById("summary");
  var y = document.getElementById("lifestory");

  
  if (x.style.display === "none") {
    x.style.display = "";
     y.style.display = "none"
  } else {
    x.style.display = "none";
  }
   
}
     


function show2Div() {
  var x = document.getElementById("summary");
  var y = document.getElementById("lifestory");

  
  if (y.style.display === "none") {
    y.style.display = "";
     x.style.display = "none"
  } 
  else {
    y.style.display = "none";
  }
   
}
