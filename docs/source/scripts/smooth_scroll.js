function handleInternalScroll(e) {
    e.preventDefault(); 
    
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    
    if (!target) return;
    
    const before = window.scrollY; 

    target.scrollIntoView({
        behavior: 'smooth'
    });

    // Use a small delay to check if scrolling actually happened
    setTimeout(() => {
        const after = window.scrollY;
        const scrolled = Math.abs(before - after) > 5; // 5px threshold
        
        if (!scrolled) {
            // No scrolling - highlight immediately
            target.classList.add("highlight");
            setTimeout(() => target.classList.remove("highlight"), 400);
        }
    }, 100);
}

document.querySelectorAll('.smooth_scroll').forEach(link => {
    link.addEventListener('click', handleInternalScroll);
});