document.querySelector('.back-to-homepage a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sidebar menu toggle for mobile view
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('aside');
    sidebar.classList.toggle('open');
});
