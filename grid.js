document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".hobby, .season, .food, .ball, .character, .dessert, .color, .tofd, .place, .kape, .snacks, .pet");

    elements.forEach(element => {
        const textElement = element.querySelector("p");
        const imageElement = element.querySelector("img");

        element.addEventListener("click", () => {
            // Toggle the 'active' class to show/hide the image and text
            element.classList.toggle("active");
        });
    });
});
