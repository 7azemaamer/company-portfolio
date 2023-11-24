const nav = document.querySelector("nav");
const links = document.querySelectorAll(".navbar .nav-item a");
const logo = document.querySelector("nav h1 a");
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    nav.classList.add("nav-scroll");
    links.forEach((link) => link.classList.add("link-scroll"));
    logo.classList.add("link-scroll");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    links.forEach((link) => link.classList.remove("link-scroll"));
    nav.classList.remove("nav-scroll");
    logo.classList.remove("link-scroll");

  }
};

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hazem Aamer", "Developer", "Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 100; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 50);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});