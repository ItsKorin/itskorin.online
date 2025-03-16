// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Add hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .cta-button, .project-link, .social-link');

interactiveElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});