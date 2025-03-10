
/* cursor */

document.addEventListener("mousedown", function () {
    document.body.style.cursor = "url('/hand-default.png'), auto";
});

document.addEventListener("mouseup", function () {
    document.body.style.cursor = "url('/hand-pointer.png'), auto";
});





/* green bar */

document.addEventListener('DOMContentLoaded', function () {
    const subheaders = document.querySelectorAll('.subheader');


    subheaders.forEach(subheader => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    subheader.classList.add('in-view');
                } else {
                    subheader.classList.remove('in-view');
                }
            });
        }, {
            threshold: 0.5,
        });


        observer.observe(subheader);
    });
});










/* polaroid rotate */

const polaroidContainers = document.querySelectorAll('.polaroid-container');

polaroidContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const randomDegree = Math.random() < 0.5
            ? Math.floor(Math.random() * 6) - 10
            : Math.floor(Math.random() * 6) + 5;

        container.style.transform = `rotate(${randomDegree}deg)`;
        container.style.zIndex = '9';
        container.style.cursor = "url('/hand-default.png'), auto";
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotate(0deg)';
        container.style.zIndex = '';
        container.style.cursor = "url('/hand-pointer.png'), auto";
    });
});

/* plate rotate */

document.querySelectorAll('.overlay-image').forEach(image => {
    image.addEventListener('click', function() {
        this.classList.add('rotate');


        setTimeout(() => {
            this.classList.remove('rotate');
        }, 1000);
    });
});
