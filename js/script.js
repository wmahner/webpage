// Add any custom JavaScript for effects or interactivity here
// Example: Add scroll event listener for additional animations or interactivity
window.addEventListener('scroll', function() {
    // Any custom scroll-based effects can be added here
});
// Color Shifting Animation
const shiftingColorsBox = document.querySelector('.shifting-colors');

let colorIndex = 0;
const colors = ['#3498db', '#e74c3c', '#27ae60'];

function changeColor() {
    shiftingColorsBox.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 3000); // Change color every 3 seconds

// Cursor Reactive Animation
const cursorReactive = document.querySelector('.cursor-reactive-anim');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const offsetX = (clientX / window.innerWidth - 0.5) * 100;
    const offsetY = (clientY / window.innerHeight - 0.5) * 100;
    cursorReactive.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
});
