const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function() {
    this.classList.toggle('active');
    container.classList.toggle('active');
});