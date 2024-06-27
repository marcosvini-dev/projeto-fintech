document.addEventListener('DOMContentLoaded', function () {
    // Inicialmente esconda os dropdowns
    document.querySelector('.account-dropdown').style.display = 'none';
    document.querySelector('.services-dropdown').style.display = 'none';
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('account-btn').addEventListener('mouseenter', function () {
    document.querySelector('.account-dropdown').style.display = 'block';
});

document.querySelector('.account').addEventListener('mouseleave', function () {
    document.querySelector('.account-dropdown').style.display = 'none';
});

document.getElementById('services-btn').addEventListener('mouseenter', function () {
    document.querySelector('.services-dropdown').style.display = 'block';
});

document.querySelector('.services').addEventListener('mouseleave', function () {
    document.querySelector('.services-dropdown').style.display = 'none';
});
