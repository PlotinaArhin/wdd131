// Display the current year
const optionsYear = { year: 'numeric' };
document.getElementById('year').textContent = new Date().toLocaleDateString(undefined, optionsYear);

// Get the last modified date of the document
let lastModified = document.lastModified;
const lastModifiedElement = document.getElementById('last-modified');

// Format the last modified date
if (lastModified) {
    // Convert string to Date object and format it
    const dateObj = new Date(lastModified);
    const formattedLastModified = dateObj.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
    lastModifiedElement.textContent = `Last modified: ${formattedLastModified}`;
} else {
    lastModifiedElement.textContent = 'Last modified date not available.';
}
