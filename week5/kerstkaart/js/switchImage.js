// dit behoort niet tot de cursus van semester 1, maar is wel leuk om te weten
// get all the elements with the class "showImage"
const showImages = document.querySelectorAll('.showImage');
console.log(showImages);
// loop through all the elements with the class "showImage"
for (let i = 0; i < showImages.length; i++) {
    // add an event listener to the element
    showImages[i].addEventListener("click", function () {
        // get the picture element
        const image = document.getElementById('picture');
        // get the data-id attribute of the clicked element
        const id = this.getAttribute("data-id");
        // set the src attribute of the picture element to the value of the data-id attribute
        image.src = `assets/kaart_${id}.webp`;
        // remove the class "active" from all elements with the class "showImage"
        for (let j = 0; j < showImages.length; j++) {
            showImages[j].classList.remove('active');
        }
        // add the class "active" to the clicked element
        this.classList.add('active');
    });
}
