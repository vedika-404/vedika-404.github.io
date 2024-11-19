// Custom Cursor Script
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = (e.pageX - 16) + 'px';  // Centers cursor
    cursor.style.top = (e.pageY - 16) + 'px';
});

// Optional: Add hover effect for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        document.getElementById('customCursor').style.transform = 'scale(1.5)';
    });
    button.addEventListener('mouseleave', () => {
        document.getElementById('customCursor').style.transform = 'scale(1)';
    });
});
