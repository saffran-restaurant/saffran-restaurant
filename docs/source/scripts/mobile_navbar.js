function to_responsive_nav() {
    const navList = document.getElementById("nav_items_list");
    const navbar = document.querySelector("nav");
    navList.classList.toggle("responsive");
    navbar.classList.toggle("menu-open");

    if (navList.classList.contains("responsive")) {
        window.addEventListener('resize', drop_responsive, { once: true });
        addNavLinkListeners()
    } else {
        window.removeEventListener('resize', drop_responsive);
        removeNavLinkListeners()
    }
}

function drop_responsive() {
    const navList = document.getElementById("nav_items_list");
    const navbar = document.querySelector("nav");
    navList.classList.remove("responsive");
    navbar.classList.remove("menu-open");
    removeNavLinkListeners()
}

let navLinkListeners = []; 
function addNavLinkListeners() {
    const navLinks = document.querySelectorAll('#nav_items_list a');
    
    navLinks.forEach(link => {
        const listener = function() {
            setTimeout(() => {
                drop_responsive();
            }, 100);
        };

        link.addEventListener('click', listener);
        
        navLinkListeners.push({ element: link, listener: listener });
    });
}

function removeNavLinkListeners() {
    navLinkListeners.forEach(({ element, listener }) => {
        element.removeEventListener('click', listener);
    });
    
    navLinkListeners = [];
}

