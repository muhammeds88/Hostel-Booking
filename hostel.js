 // Function to toggle filter options
 function toggleFilters() {
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.classList.toggle('show');
}

// Function to show hostel details on click
function showHostelDetails(hostelName) {
    // Redirect to hostel details page with hostelName parameter
    window.location.href = `hostel_det.html?hostel=${encodeURIComponent(hostelName)}`;
}

// Function to update price range value display
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
priceValue.textContent = `$${priceRange.value}`;

priceRange.addEventListener('input', function() {
    priceValue.textContent = `$${this.value}`;
    // Add logic to filter hostels based on price range
});

// Function to update distance range value display
const distanceRange = document.getElementById('distanceRange');
const distanceValue = document.getElementById('distanceValue');
distanceValue.textContent = `${distanceRange.value} km`;

distanceRange.addEventListener('input', function() {
    distanceValue.textContent = `${this.value} km`;
    // Add logic to filter hostels based on distance
});


// hostel.js
// Function to apply filters
function applyFilters() {
// Add logic here to apply filters based on user selections
// For example:
const priceRangeValue = document.getElementById('priceRange').value;
const distanceRangeValue = document.getElementById('distanceRange').value;
const categoryGirlsChecked = document.getElementById('categoryGirls').checked;
const categoryBoysChecked = document.getElementById('categoryBoys').checked;
const categoryBothChecked = document.getElementById('categoryBoth').checked;

// You can implement your filtering logic here

// Close the filter options panel after applying filters
toggleFilters();
}

// Function to reset filters
function resetFilters() {
// Reset input values and checkboxes
document.getElementById('priceRange').value = 50;
document.getElementById('priceValue').textContent = '$50';
document.getElementById('distanceRange').value = 5;
document.getElementById('distanceValue').textContent = '5 km';
document.getElementById('categoryGirls').checked = false;
document.getElementById('categoryBoys').checked = false;
document.getElementById('categoryBoth').checked = false;

// Optionally, reset any other filter-related variables or states

// Close the filter options panel after resetting filters
toggleFilters();
}
