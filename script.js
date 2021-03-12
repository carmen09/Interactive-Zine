let flyingEnglish = document.querySelector(".English");
let hoverEnglish = document.querySelector(".English");

hoverEnglish.addEventListener("mouseover", function(){
    flyingEnglish.classList.add("active");

})

hoverEnglish.addEventListener("mouseout", function(){
    flyingEnglish.classList.remove("active");

})


function hideEnglish(){
    flyingEnglish.classList.remove("active");
}
