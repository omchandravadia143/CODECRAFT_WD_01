// When the page is scrolled, change the navbar style
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scroll-change");
    } else {
        navbar.classList.remove("scroll-change");
    }
};

// Change navbar color when hovering over a menu item
const menuItems = document.querySelectorAll('.navbar ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color =  ' #f39c12'; // Change font color on hover
    });
    item.addEventListener('mouseout', () => {
        item.style.color = ''; // Reset font color
    });
});
