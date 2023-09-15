const btn = document.getElementById('btn');

btn.addEventListener('click', createCookie);

function createCookie() {
    document.cookie = document.getElementById('q').value;
}