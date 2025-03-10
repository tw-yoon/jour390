
/* cursor */

document.addEventListener("mousedown", function () {
    document.body.style.cursor = "url('/hand-default.cur'), auto";
});

document.addEventListener("mouseup", function () {
    document.body.style.cursor = "url('/hand-pointer.cur'), auto";
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
        container.style.cursor = "url('/hand-default.cur'), auto";
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotate(0deg)';
        container.style.zIndex = '';
        container.style.cursor = "url('/hand-pointer.cur'), auto";
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
