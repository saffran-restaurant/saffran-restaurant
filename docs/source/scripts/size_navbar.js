function updateScrollMargin() {
    // Select your navbar element (change selector if needed)
    const navbar = document.querySelector('nav');
    
    if (navbar) {
        const height = navbar.offsetHeight;
        
        // Get current rem size in pixels
        const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const additionalMargin = 2 * remSize; // 2rem in pixels
        
        // Add 2rem to the navbar height
        const totalHeight = height + additionalMargin;
        
        // Set CSS custom property in :root
        document.documentElement.style.setProperty('--navbar-height', `${totalHeight}px`);
    }
}

const updateScrollMargin_on_resize = debounce(updateScrollMargin, 100);

window.addEventListener('resize', updateScrollMargin_on_resize);
updateScrollMargin();