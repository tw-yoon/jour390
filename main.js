const images = [
    'images1.jpg', // Change these to your actual image paths
    'images2.jpg',
    'images3.jpg',
    'images1.jpg', // Change these to your actual image paths
    'images2.jpg',
    'images3.jpg',
];

const dynamicImage = document.getElementById('dynamic-image');
const steps = document.querySelectorAll('.step');

// Initialize Scrollama
const scroller = scrollama();

// Setup scroller with options
scroller
    .setup({
        step: '.step', // the class of the elements to track
        offset: 0.5, // how far into the viewport to trigger (0.5 means halfway down)
        debug: false, // set to true for debugging messages
    })
    .onStepEnter(({ element, index }) => {
        // Actions when entering a step
        element.classList.add('is-active'); // Add an active class for styling
        // You can add other actions here, like updating a sidebar or changing content
    })
    .onStepExit(({ element, index }) => {
        // Actions when exiting a step
        element.classList.remove('is-active'); // Remove active class
    });

// Optional: handle window resize events
window.addEventListener('resize', () => {
    scroller.resize(); // Call resize method to recalculate dimensions
});

document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the step is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the active class to the current step
                entry.target.classList.add('is-active');
            } else {
                // Remove the active class when it's not visible
                entry.target.classList.remove('is-active');
            }
        });
    }, options);

    // Observe each step
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
            ? Math.floor(Math.random() * 6) - 10 // Random value between -10 and -5
            : Math.floor(Math.random() * 6) + 5; // Random value between 5 and 10

        container.style.transform = `rotate(${randomDegree}deg)`;
        container.style.zIndex = '9'; // Set z-index on hover
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'rotate(0deg)'; // Reset rotation on mouse leave
        container.style.zIndex = ''; // Reset z-index on mouse leave
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    let circleIndex = 0;

    function showCircle() {
        if (circleIndex < circles.length) {
            circles[circleIndex].classList.add('visible'); // Add class to make it visible
            circleIndex++;
            setTimeout(showCircle, 500); // Delay for the next circle
        }
    }

    // Start showing circles when the section is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            showCircle(); // Start showing circles when the section comes into view
            observer.disconnect(); // Stop observing after circles start appearing
        }
    });

    observer.observe(document.querySelector('.content')); // Observe the content section
});

document.addEventListener("scroll", function () {
    const container = document.querySelector(".image-gradation");
    const topImage = document.querySelector(".top-image");
    const bottomImage = document.querySelector(".bottom-image");

    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollPosition = window.scrollY;

    // Normalize scroll progress within this container only
    let scrollPercent = (scrollPosition - containerTop) / containerHeight;
    scrollPercent = Math.max(0, Math.min(1, scrollPercent)); // Clamp between 0 and 1

    topImage.style.opacity = 1 - scrollPercent;
    bottomImage.style.opacity = scrollPercent;
});