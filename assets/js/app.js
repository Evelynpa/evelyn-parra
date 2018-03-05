(function load(){

})();


function parallax(){
    let layer_1 = document.getElementById('layer_1');
    let layer_2 = document.getElementById('layer_2');

    // aplicar posicion
    layer_1.style.top = -(window.pageYOffset / 8) + 'px';
    layer_2.style.top = -(window.pageYOffset / 6) + 'px';
}
window.addEventListener('scroll', parallax, false);

$(".foo, .bar").smoove({
    offset  : '15%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '100px',
    moveY   : '100px',
  });