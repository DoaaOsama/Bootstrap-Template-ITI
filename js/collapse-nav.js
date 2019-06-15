// debugger;
var navbar__items = document.getElementsByClassName("collpse-nav__item");
var activeItem = document.querySelector(".collpse-nav__active");
var navbar__contents = document.getElementsByClassName("contents__container");
var activeContent = document.querySelector(".content_active");

showActive();

for(var i=0; i<navbar__items.length;i++){
    navbar__items[i].addEventListener("click", setActive);
}

function setActive(){
    if(activeItem != this){
        activeItem.classList.remove("collpse-nav__active");
        this.classList.add("collpse-nav__active");
        activeItem = this;
    }
    activateText();
    showActive();
}

function activateText(){
    for (var j =0; j < navbar__items.length; j++) {
        if(navbar__items[j] === activeItem){
            if(navbar__contents[j] != activeContent){
                activeContent.classList.remove("content_active");
                navbar__contents[j].classList.add("content_active");
                activeContent = navbar__contents[j];
            }
        }  
    }
}

function showActive(){
    for(var i=0; i<navbar__contents.length;i++){
        if(navbar__contents[i].classList.contains("content_active")){
            navbar__contents[i].style.display = "block";
        }
        else{
            navbar__contents[i].style.display = "none";
        }
    }
}

