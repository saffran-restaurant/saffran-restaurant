// A utility to stop the function from running constantly during resize
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        // If called again before 'wait' expires, cancel the previous timer
        clearTimeout(timeout);
        // Start a new timer; logic runs only if no new calls happen within 'wait' ms
        timeout = setTimeout(func, wait);
    };
}

function renderFoodCategories() {
    const container = document.getElementById('food_categories');
    
    if (!window.originalItems) {
        window.originalItems = Array.from(container.children);
    }
    
    const items = window.originalItems;
    const width = window.innerWidth;
    
    let colCount = 1;
    if (width >= 1200) colCount = 2;
    else if (width >= 600) colCount = 1;
    else colCount = 1;

    // Remove everything from food_categories
    container.innerHTML = '';
    
    // Rebuild food categories in colCount columns

    // Create column containers
    const cols = [];
    for (let i = 0; i < colCount; i++) {
        let col = document.createElement('div');
        col.className = 'food_categories_col';
        container.appendChild(col);
        cols.push(col);
    }

    // Distribute items into columns
    items.forEach((item, index) => {
        cols[index % colCount].appendChild(item);
    });
}

// Run immediately on load
renderFoodCategories();

// Run on resize, but wait 150ms after user stops resizing
window.addEventListener('resize', debounce(renderFoodCategories, 150));