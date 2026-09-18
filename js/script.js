document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const linkPage = href.split('/').pop() || 'index.html';

        if (linkPage.toLowerCase() === currentPage.toLowerCase()) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});