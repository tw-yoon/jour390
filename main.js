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
        step: '.step',
        offset: 0.5,
        debug: false,
    })
    .onStepEnter(({ element, index }) => {
        element.classList.add('is-active');
        dynamicImage.src = images[index]; // Change image based on step
    })
    .onStepExit(({ element, index }) => {
        element.classList.remove('is-active');
    });

// Optional: handle window resize events
window.addEventListener('resize', () => {
    scroller.resize();
});

document.addEventListener('DOMContentLoaded', function() {
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