//Define Global Variables.

const sections = Array.from(document.querySelectorAll("section"));
const navBar = document.getElementById("navbar__list");

//addsection to navBar.
function createMenuItems() {
    for (items of sections) {
        listItem = document.createElement("ul");
        listItem.innerHTML=`<li><a herf="#${items.id}" data-nav="${items.id}" class="menu__link">${items.dataset.nav}</a></li>`;
        navBar.appendChild(listItem);
    }
}
createMenuItems();

// use an event while scroll to add class (your-active-class) and using getBoundingClientRect().top.
window.addEventListener("scroll", function () {
        document.querySelectorAll("section").forEach(function (active) {
            if (active.getBoundingClientRect().top >= -400 &&
                active.getBoundingClientRect().top <= 150) {
                active.classList.add("your-active-class");
            }
            else {
                active.classList.remove("your-active-class");
            }
        });
    });

//Making  Clicking on a navigation item should scroll to the appropriate section of the page
//Use scrollintoView(smooth).
navBar.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.nav) {
        document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
    }
});

// Define variable to scroll Top button
const scrollBtn = document.querySelector("#scrollBtn");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function () {
    if (window.scrollY > window.innerHeight) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollBtn.addEventListener("click", function topFunction() {
   /* document.body.scrollTop = 0;*/
    document.documentElement.scrollTop = 0;
    scrollIntoView({ behavior: "smooth" });
})

