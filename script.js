$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $('.sub').click(function () {
        $('.fa-caret-down').toggleClass('fa-caret-up');
        $('.sublist').toggle('sublist');
    });
    $('.create-acc').click(function () {
        $('.signin').hide('signup');
        $('.signup').show('signup');
    });
    $('.log-back').click(function () {
        $('.signup').hide('signup');
        $('.signin').show('signup');
    });
    // $('html').(function () {
    //     $('.sublist').hide('sublist');
    // })
    $(window).on('scroll load', function () {
        $(this).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
        $('section').each(function () {
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height;
            var top = $(this).offset().top - 200;
            if (top >= offset() + top && top < height + offset()) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 4000);
}
window.onload = fadeOut;
