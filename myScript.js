function display(){
   
   var d = document.getElementById('meS');    
  if(d.style.display == "block") { // if is menuBox displayed, hide it
    d.style.display = "none";
	document.getElementById('buS').style="background:hsl(210, 46%, 95%);border-radius:100px ;";
	document.getElementById('bS').style="color:(217, 19%, 35%);font-size:20px;";
  }
  else { // if is menuBox hidden, display it
    d.style.display = "block";
	document.getElementById('buS').style="background:hsl(217, 19%, 35%);border-radius:100px ;";
	document.getElementById('bS').style="color:white;font-size:20px;";
  }
  }