// Add hover effects using JavaScript for modern animations
document.querySelectorAll('.content').forEach((content) => {
    content.addEventListener('mouseover', () => {
        content.style.transform = 'scale(1.05)';
    });

    content.addEventListener('mouseout', () => {
        content.style.transform = 'scale(1)';
    });
});