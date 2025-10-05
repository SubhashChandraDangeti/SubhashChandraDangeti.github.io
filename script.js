// Wait for the document to be fully loaded before running scripts
$(document).ready(function() {

    // --- 1. Real-time Clock ---
    // This function updates the current time every second
    function startTime() {
        const today = new Date();
        // Use toLocaleString for a more readable format
        const timeString = today.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        $('#currentTime').html(timeString);
        // Repeat the function every 1000 milliseconds (1 second)
        setTimeout(startTime, 1000);
    }
    // Initial call to start the clock
    startTime();


    // --- 2. "Back to Top" Button ---
    // Show or hide the button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // If user scrolls down more than 200px
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Smooth scroll to top when the button is clicked
    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); // 800ms scroll speed
        return false;
    });


    // --- 3. Active Navigation Link on Scroll ---
    // This uses Intersection Observer for efficient scroll detection
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-sidebar .nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Get the ID of the intersecting section
                const id = entry.target.getAttribute('id');
                // Find the corresponding nav link and add 'active' class
                const activeLink = document.querySelector(`#nav-sidebar .nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Trigger when section is in the middle of the viewport
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

});