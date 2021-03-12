let flyingEnglish = document.querySelector(".English");
let hoverCorner = document.querySelector(".English");

hoverCorner.addEventListener("mouseover", function(){
    flyingEnglish.classList.add("active");

})

hoverCorner.addEventListener("mouseout", function(){
    flyingEnglish.classList.remove("active");

})


function hideEnglish(){
    flyingEnglish.classList.remove("active");
}
