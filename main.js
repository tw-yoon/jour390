// scrollama.js
const scroller = scrollama();

// Setup scrollama
function handleStepEnter(response) {
    // Response contains information about the step that has entered
    const step = response.element;
    // Add an active class to highlight the step
    step.classList.add('is-active');
}

// Initialize scrollama
function setupScrollama() {
    scroller
        .setup({
            step: '.step',
            offset: 0.5, // Trigger halfway down the viewport
            progress: true,
        })
        .onStepEnter(handleStepEnter);
}

// Initialize on load
window.addEventListener('load', setupScrollama);