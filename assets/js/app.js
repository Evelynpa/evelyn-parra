(function load() {

})();
window.onload = function () {
    $(window).scroll(function () {
        $scrol = $(document).scrollTop();
        console.log($scrol);
        if ($scrol > 60) {
            $('.navbar').addClass('shrink');
            $('.navbar').addClass('navbar-fixed-top');
        }
        else {
            $('.navbar').removeClass('shrink');
        }

    });
};
// function parallax() {
//     let layer_1 = document.getElementById('layer_1');

//     // aplicar posicion
//     layer_1.style.top = -(window.pageYOffset / 2) + 'px';
// }


// window.addEventListener('scroll', parallax, false);







$('.nav li a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({ scrollTop: targetOffset }, 800);
            return false;
        }
    }
});


// $('#contact-us').submit(function (e) {
//     let name = document.getElementById('name');
//     let email = document.getElementById('mail');
//     let message = document.getElementById('message');
//     if (!name.value || !email.value || !message.value) {
//         alertify.error('Please check your entries');
//         return false;
//     } else {
//         $.ajax({
//             url: 'https://formspree.io/evelyn.parra.rojas@gmail.com',
//             method: 'POST',
//             data: $('#contact-us').serialize(),
//             datatype: 'json'
//         });
//         e.preventDefault();
//         $(this).get(0).reset();
//         return alertify.success('Message sent');
//     }
// });





