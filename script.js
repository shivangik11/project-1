
function getColors(){
   const bgColor = document.getElementById('bgColor').value;
   const secColor = document.getElementById('secColor').value;
   window.sessionStorage.setItem("bgColor", bgColor);
   window.sessionStorage.setItem("secColor", secColor);
}

 function getButton(){
  const buttonColor= document.getElementById('buttonColor').value;
  const buttonFontStyle = document.getElementById('buttonFontStyle').value;
  const buttonFontSize = document.getElementById('buttonFontSize').value;
  
   window.sessionStorage.setItem("buttonColor", buttonColor);
   window.sessionStorage.setItem("buttonFontStyle", buttonFontStyle);
   window.sessionStorage.setItem("buttonFontSize", buttonFontSize);

 }
function gettext(){
  const textColor= document.getElementById('textColor').value;
  const secColor = document.getElementById('textFont').value;
  const textSize = document.getElementById('textSize').value;
  
   window.sessionStorage.setItem("textColor", textColor);
   window.sessionStorage.setItem("textFont", textFont);
   window.sessionStorage.setItem("textSize", textSize);
  
}



function getHeading(){
  const headColor= document.getElementById('headColor').value;
  const fontStyle = document.getElementById('fontStyle').value;
  const fontSize = document.getElementById('fontSize').value;
   window.sessionStorage.setItem("headColor", headColor);
   window.sessionStorage.setItem("fontStyle", fontStyle);
   window.sessionStorage.setItem("fontSize", fontSize);
  }


  function changes(){

    var mainDiv = document.getElementById("mainDiv");
    mainDiv.style.backgroundColor = window.sessionStorage.getItem("bgColor");

    var formDiv = document.getElementById("formDiv");
    formDiv.style.backgroundColor = window.sessionStorage.getItem("secColor");


    var elem = document.getElementById("designHeading");
    elem.style.color = window.sessionStorage.getItem("headColor");
    elem.style.fontFamily = window.sessionStorage.getItem("fontStyle");
    elem.style.fontSize = window.sessionStorage.getItem("fontSize");

    var elem1 = document.getElementById("userName");
    elem1.style.color = window.sessionStorage.getItem("textColor");
    elem1.style.fontFamily = window.sessionStorage.getItem("textFont");
    elem1.style.fontSize = window.sessionStorage.getItem("textSize");

    var button = document.getElementById("button");
    button.style.color = window.sessionStorage.getItem("buttonColor");
    button.style.fontFamily = window.sessionStorage.getItem("buttonFontStyle");
    button.style.fontSize = window.sessionStorage.getItem("buttonFontSize");

    var button1 = document.getElementById("button1");
    button1.style.color = window.sessionStorage.getItem("buttonColor");
    button1.style.fontFamily = window.sessionStorage.getItem("buttonFontStyle");
    button1.style.fontSize = window.sessionStorage.getItem("buttonFontSize");

    var button2 = document.getElementById("button2");
    button2.style.color = window.sessionStorage.getItem("buttonColor");
    button2.style.fontFamily = window.sessionStorage.getItem("buttonFontStyle");
    button2.style.fontSize = window.sessionStorage.getItem("buttonFontSize");

    
  }




