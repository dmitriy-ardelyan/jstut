function Fstyle(element, curClass){
    var elem = document.getElementById(element);    
    elem.className = curClass;  
}

function FstyleOnMouseOut(elementName, curClass){
    var elem = document.querySelector("[name='"+ elementName + "']");
    elem.className = curClass;  
}

function EnlargeYourPictures(){
    const pictures = document.querySelectorAll("[label='picture']");
    pictures[0].style.opacity = "100%";
    for (i = 0; i < pictures.length; i++) {   
        pictures[i].style.width = "400px";
    }
}

function DecreaseYourPictures(){
    var pictures = document.querySelectorAll("[label='picture']");
    for (i = 0; i < pictures.length; i++) {
    pictures[i].style.width = "300px";
}
}