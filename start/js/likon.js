const stars = [...document.querySelectorAll(".stars button")];
const ratingText = document.getElementById("rating-text");
const LABELS = ["", "Bad", "Okay", "Good", "Great", "Excellent"];
let rating = 0;

stars.forEach(star => {
    star.addEventListener("mouseover", () => highlight(star.dataset.value));
    star.addEventListener("mouseout", () => highlight(rating));
    star.addEventListener("click", () => {
        rating = +star.dataset.value;
        ratingText.textContent = LABELS[rating];
        highlight(rating);
    });
});

function highlight(count) {
    stars.forEach((s, i) => {
        s.classList.toggle("hover", i < count);
        s.classList.toggle("selected", i < rating);
    });
}