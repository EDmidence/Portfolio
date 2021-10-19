
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");

var img = document.getElementById("info");
var img2 = document.getElementById("info2");
var img3 = document.getElementById("info3");
var img4 = document.getElementById("info4");
var img5 = document.getElementById("info5");
var img6 = document.getElementById("info6");
var img7 = document.getElementById("info7");
var img8 = document.getElementById("info8");
var img9 = document.getElementById("info9");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal5.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal6.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img7.onclick = function(){
modal7.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal8.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img9.onclick = function(){
modal9.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];

span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function(){
  modal2.style.display = "none";
}

span3.onclick = function(){
  modal3.style.display = "none";
}

span4.onclick = function(){
  modal4.style.display = "none";
}

span5.onclick = function(){
  modal5.style.display = "none";
}

span6.onclick = function(){
  modal6.style.display = "none";
}

span7.onclick = function(){
  modal7.style.display = "none";
}

span8.onclick = function(){
  modal8.style.display = "none";
}

span9.onclick = function(){
  modal9.style.display = "none";
}