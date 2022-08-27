"use strict";

let panels = document.querySelectorAll(".panel");


// Event listener to change active class
for (let i = 0; i < panels.length; i++){
    panels[i].addEventListener("click", () => {
        removeActiveClass();
        panels[i].classList.add("active");
    })
}


// Function to remove active class
function removeActiveClass () {
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove("active");
    }
};