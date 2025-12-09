function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        // Execute the function after the wait period
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}