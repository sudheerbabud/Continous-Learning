document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const backToTopButton = document.getElementById('backToTop');

    // Improved toggle functionality
    sidebarToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggleButton && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Show/hide the "Back to Top" button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
