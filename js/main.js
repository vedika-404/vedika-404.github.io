// Custom Cursor Script
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
