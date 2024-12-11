document.addEventListener('DOMContentLoaded', () => {
    // Display the current year
    const optionsYear = { year: 'numeric' };
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().toLocaleDateString(undefined, optionsYear);
    }

    // Get the last modified date of the document
    let lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('last-modified');

    if (lastModifiedElement) {
        if (lastModified) {
            const dateObj = new Date(lastModified);
            const formattedLastModified = dateObj.toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short'
            });
            lastModifiedElement.textContent = `Last modified: ${formattedLastModified}`;
        } else {
            lastModifiedElement.textContent = 'Last modified date not available.';
        }
    }
});

