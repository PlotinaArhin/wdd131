document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const nav = document.getElementById('mainNav');

    hamburgerButton.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    // Footer: Set last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = document.lastModified;
});
