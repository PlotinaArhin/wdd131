document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const nav = document.getElementById('mainNav');
    const gallery = document.querySelector('.gallery');
    const lastModifiedSpan = document.getElementById('lastModified');

    const temples = [
        { name: 'San Diego California', location: 'California, USA', dedicated: 1993, area: 72000, image: 'images/sandiago.jpg' },
        { name: 'Ivory Coast Temple', location: 'Abidjan, Ivory Coast', dedicated: 2018, area: 17000, image: 'images/ivorycoasttemple.jpg' },
        { name: 'Philippines Temple', location: 'Manila, Philippines', dedicated: 1984, area: 85000, image: 'images/philippines.jpg' },
        { name: 'Ghana Temple', location: 'Accra, Ghana', dedicated: 2004, area: 17000, image: 'images/ghana.jpg' },
        { name: 'Utah Temple', location: 'Salt Lake City, Utah', dedicated: 1893, area: 120000, image: 'images/utah.jpg' },
        { name: 'Cape Verde Temple', location: 'Praia, Cape Verde', dedicated: 2022, area: 9000, image: 'images/capeverde.jpg' },
        { name: 'Pryson Temple', location: 'Fictional, USA', dedicated: 2023, area: 15000, image: 'images/pryson.jpeg' }
    ];

    function displayTemples(filteredTemples) {
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            const figure = document.createElement('figure');
            figure.innerHTML = `
                <img src="${temple.image}" alt="${temple.name}" loading="lazy">
                <figcaption>
                    <h3>${temple.name}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            `;
            gallery.appendChild(figure);
        });
    }

    function filterTemples(criteria) {
        let filtered = temples;
        if (criteria === 'Old') {
            filtered = temples.filter(temple => temple.dedicated < 1900);
        } else if (criteria === 'New') {
            filtered = temples.filter(temple => temple.dedicated > 2000);
        } else if (criteria === 'Large') {
            filtered = temples.filter(temple => temple.area > 90000);
        } else if (criteria === 'Small') {
            filtered = temples.filter(temple => temple.area < 10000);
        }
        displayTemples(filtered);
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.textContent.trim();
            if (filter === 'Home') {
                displayTemples(temples);
            } else {
                filterTemples(filter);
            }
        });
    });

    hamburgerButton.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    // Set last modified date
    lastModifiedSpan.textContent = document.lastModified;

    // Initial Display
    displayTemples(temples);
});
