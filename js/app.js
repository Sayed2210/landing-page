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

// use an event (window.onscroll) while scroll to add class (your-active-class) and using getBoundingClientRect().top.
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        if (active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150) {
            active.classList.add("your-active-class");
        }
        else {
            active.classList.remove("your-active-class");
        }
    });
};

// Clicking on a navigation item should scroll to the appropriate section of the page
//Use scrollintoView(smooth).
navBar.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.nav) {
        document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
    }
});