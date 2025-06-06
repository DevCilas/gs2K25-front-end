
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
   
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});





const elementsToFadeIn = document.querySelectorAll('.fade-in');


const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
       
            entry.target.classList.add('visible');
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


elementsToFadeIn.forEach(element => {
    observer.observe(element);
});