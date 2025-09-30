
let vehicles = [];

// Load the JSON data
fetch('vehicles_for_website.json')
    .then(response => response.json())
    .then(data => {
        vehicles = data;
    });

function searchVehicles() {
    const make = document.getElementById('make').value.toLowerCase();
    const model = document.getElementById('model').value.toLowerCase();
    const year = document.getElementById('year').value.toLowerCase();
    const vin = document.getElementById('vin').value.toLowerCase();
    const recall = document.getElementById('recall').value.toLowerCase();

    const filtered = vehicles.filter(v =>
        (make === '' || v.make.toLowerCase().includes(make)) &&
        (model === '' || v.model.toLowerCase().includes(model)) &&
        (year === '' || String(v.year).toLowerCase().includes(year)) &&
        (vin === '' || v.vin.toLowerCase().includes(vin)) &&
        (recall === '' || String(v.recall).toLowerCase().includes(recall))
    );

    displayResults(filtered);
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    data.forEach(v => {
        const entry = document.createElement('div');
        entry.className = 'vehicle-entry';
        entry.innerHTML = `
            <strong>Make:</strong> ${v.make}<br>
            <strong>Model:</strong> ${v.model}<br>
            <strong>Year:</strong> ${v.year}<br>
            <strong>VIN:</strong> ${v.vin}<br>
            <strong>Recall:</strong> ${v.recall}<br>
            <strong>Recall Status:</strong> ${v.recall_status}<br>
            <strong>Docs:</strong> ${v.docs.join(', ')}
        `;
        resultsDiv.appendChild(entry);
    });
}
