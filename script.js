// Place this code at the end of your HTML file, just before the closing </body> tag

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Particles.js initialization
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded');
    });

    // Typed.js initialization
    var typed = new Typed('#typed-text', {
        strings: ["Welcome to Chip's Corner", "Explore My Gaming World", "Join Me on My Adventures"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Slick carousel initialization
    $('.game-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Counter-Up initialization
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Parallax scrolling effect
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.parallax-bg').css('background-position-y', -(scrolled * 0.3) + 'px');
    });

    // Audio player controls
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');
    const pauseButton = document.getElementById('pause-music');

    playButton.addEventListener('click', () => {
        audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });
});
</script>
