document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll(".star");
        const averageRatingElement = rating.querySelector(".average-rating");

        stars.forEach(star => {
            star.addEventListener("click", function () {
                const selectedValue = this.getAttribute("data-value");
                highlightStars(stars, selectedValue);
                updateAverageRating(rating, selectedValue);
            });
        });
    });

    function highlightStars(stars, selectedValue) {
        stars.forEach(star => {
            if (star.getAttribute("data-value") <= selectedValue) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }

    function updateAverageRating(rating, selectedValue) {
        let totalRatings = parseInt(rating.getAttribute("data-total-ratings")) || 0;
        let totalScore = parseFloat(rating.getAttribute("data-total-score")) || 0;

        totalRatings += 1;
        totalScore += parseInt(selectedValue);

        const average = (totalScore / totalRatings).toFixed(1);

        rating.setAttribute("data-total-ratings", totalRatings);
        rating.setAttribute("data-total-score", totalScore);

        const averageRatingElement = rating.querySelector(".average-rating");
        averageRatingElement.textContent = `Average Rating: ${average}`;
    }
});
