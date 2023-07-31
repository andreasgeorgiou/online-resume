
    // JavaScript code to handle menu toggling
    document.addEventListener('DOMContentLoaded', function() {

    const isMobile = window.matchMedia("(max-width: 864px)").matches;

    if(isMobile){
        const navLinks = document.querySelectorAll('.nav-wrapper ul li a');
        const navWrapper = document.querySelector('.nav-wrapper');

        navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Close the menu by unchecking the "nav" checkbox
                    document.getElementById('nav').checked = false;
                    // Hide the navigation wrapper
                    navWrapper.style.opacity = 0;
                    navWrapper.style.zIndex = -1;
                });
        });

                    // Toggle the menu when the checkbox is checked or unchecked
        document.getElementById('nav').addEventListener('change', function() {
        if (this.checked) {
            // Menu is open
            navWrapper.style.opacity = 1;
            navWrapper.style.zIndex = 9990;
        } else {
            // Menu is closed
            navWrapper.style.opacity = 0;
            navWrapper.style.zIndex = -1;
        }
        });
    }
});
