function reveal() {
    var reveals = document.getElementsByClassName("reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function about() {
    var about = document.getElementbyId("about");
    about.width = 900;
    about.height = 600;
    ctx.drawImage(about, 0, 0, about.width, about.height);

}
// To check the scroll position on page load
reveal();