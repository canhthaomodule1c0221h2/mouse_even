let img = null;
function init() {
    img = document.getElementById('myimg');
    img.style.position = 'relative';
    img.style.left = '0px';
}
function moveRight() {
    img.style.left = parseInt(img.style.left) + 10 + 'px';
}
window.onload = init;