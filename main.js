const dynamicImage = document.getElementById('dynamic-image');
const steps = document.querySelectorAll('.step');


const scroller = scrollama();


scroller
    .setup({
        step: '.step',
        offset: 0.5,
        debug: false,
    })
    .onStepEnter(({ element, index }) => {
        element.classList.add('is-active');
    })
    .onStepExit(({ element, index }) => {
        element.classList.remove('is-active');
    });


window.addEventListener('resize', () => {
    scroller.resize();
});






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
















document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            } else {
                entry.target.classList.remove('is-active');
            }
        });
    }, options);


    steps.forEach(step => {
        observer.observe(step);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#potteryCostTable tbody");


    const potteryCosts = [
        { type: "Single Class", cost: 200 },
        { type: "6-Week Class", cost: 350 }
    ];


    potteryCosts.forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${item.type}</td><td>$${item.cost}</td>`;
        tableBody.appendChild(row);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const imageTrack = document.querySelector(".image-track");


    function updateCircleVisibility(stepIndex) {
        if (stepIndex === 1) {
            imageTrack.classList.add("show-circle");
            imageTrack.classList.remove("hide-circle");
        } else if (stepIndex === 3) {
            imageTrack.classList.add("hide-circle");
            imageTrack.classList.remove("show-circle");
        }
    }


    function handleScroll() {
        let currentStepIndex = 0;


        steps.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
                currentStepIndex = parseInt(step.getAttribute("data-step"));
            }
        });


        updateCircleVisibility(currentStepIndex);
    }


    window.addEventListener("scroll", handleScroll);
});
















const polaroidContainers = document.querySelectorAll('.polaroid-container');


polaroidContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const randomDegree = Math.random() < 0.5
            ? Math.floor(Math.random() * 6) - 10
            : Math.floor(Math.random() * 6) + 5;


        container.style.transform = `rotate(${randomDegree}deg)`;
        container.style.zIndex = '9';
    });


    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotate(0deg)';
        container.style.zIndex = '';
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    let circleIndex = 0;


    function showCircle() {
        if (circleIndex < circles.length) {
            circles[circleIndex].classList.add('visible');
            circleIndex++;
            setTimeout(showCircle, 500);
        }
    }


    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            showCircle();
            observer.disconnect();
        }
    });


    observer.observe(document.querySelector('.content'));
});








document.querySelectorAll('.overlay-image').forEach(image => {
    image.addEventListener('click', function() {
        this.classList.add('rotate');


        setTimeout(() => {
            this.classList.remove('rotate');
        }, 1000);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const imageTrack = document.querySelector(".image-tact");
    const section = document.querySelector(".content");


    function checkScroll() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;


        if (sectionTop < windowHeight / 2) {
            imageTrack.classList.add("visible");
        }
    }


    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
