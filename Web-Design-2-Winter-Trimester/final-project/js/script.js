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
    about.open();
}

function open() {
    img.addEventListener('load'), () => {
        // Initialize the canvas and it's size
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set width and height
        canvas.width = 200;
        canvas.height = 150;

        // Draw image and export to a data-uri
        ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);
        const dataURI = canvas.toDataURL();

        // Do something with the result, like overwrite original
        img.src = dataURI;
    }
}
// To check the scroll position on page load
reveal();