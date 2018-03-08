(function load(){

})();

function parallax(){
    let layer_1 = document.getElementById('layer_1');

    // aplicar posicion
    layer_1.style.top = -(window.pageYOffset / 2) + 'px';
}
window.addEventListener('scroll', parallax, false);