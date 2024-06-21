
// css
window.addEventListener('scroll', function () {
    const nav = document.getElementById('header');
    const scrollTrigger = window.innerHeight - nav.offsetHeight; // Adjust scroll trigger to account for navbar height
    if (window.scrollY >= scrollTrigger) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
// nav links
document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.getElementById('header').offsetHeight;
    document.querySelectorAll('#header a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
