document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('nav-toggle');
    this.classList.toggle('fa-times');
});