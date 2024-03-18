function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var reveal = reveals[i];
        var windowHeight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
