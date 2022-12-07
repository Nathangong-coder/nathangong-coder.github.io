function imageRNG() {
    imageNum = Math.floor(Math.random() * 2);
    if (imageNum = 0) {
        document.getElementById('changed-image').src = 'images/cursed-christmas-image-1.jpg';
    }
    if (imageNum = 1) {
        document.getElementById('changed-image').src = 'images/cursed-christmas-image-2.jpg';
    }
}