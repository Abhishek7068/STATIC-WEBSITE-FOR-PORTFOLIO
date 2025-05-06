var tablinks= document.getElementsByClassName('tab-links');
var tabcontents= document.getElementsByClassName('tab-content');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}


var sidemenu = document.getElementById("sidemenu");
var overlay = document.getElementById("overlay");

function openmenu(){
    sidemenu.style.right = '0';
    overlay.style.display = 'block';
    
}
function closemenu(){
    sidemenu.style.right = '-200px';
    overlay.style.display = 'none';
}
document.addEventListener('click', function(event) {
// Check if the click is outside the sidemenu or the menu button
if (!sidemenu.contains(event.target) && !event.target.matches('.fa-bars')) {
    closemenu();
}
overlay.addEventListener('click',closemenu);
});         

window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Initialize EmailJS
(function () {
emailjs.init("nYK2oLUfMlYfsPtbi"); // Replace with your EmailJS Public Key
}());

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
e.preventDefault();

// Prepare form data for EmailJS
const formData = {
    Name: form.elements["Name"].value,
    Email: form.elements["Email"].value,
    Message: form.elements["Message"].value,
};

// Send the email using EmailJS
emailjs
    .send("service_xyw03bs", "template_dd3tmor", formData)
    .then(
    (response) => {
        console.log("SUCCESS!", response.status, response.text);
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => (msg.innerHTML = ""), 5000);
        form.reset();
    },
    (error) => {
        console.error("FAILED...", error);
        msg.innerHTML = "Failed to send message!";
    }
    );
});

// Scroll animation

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animate-section");
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const observer = new IntersectionObserver((entries) => {
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        let scrollingDown = currentScrollTop > lastScrollTop;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden-down", "hidden-up");
            } else {
                if (scrollingDown) {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("hidden-up"); // Fade out & move up when scrolling down
                } else {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("hidden-down"); // Fade out & move down when scrolling up
                }
            }
        });

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
    }, { threshold: 0.2 });

    sections.forEach((section) => observer.observe(section));
});
