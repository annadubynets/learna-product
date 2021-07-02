/**
 * The function below setups the behaviour of the right side panel with the course options (pult)
 * The pult must be sticky on the screen as long as will not bump to the specific section. We mark it with the css class
 * .pult-bottom-barrier
 */
$(function() {
    function setupPult() {
        var pult = $('.desktop-pult');
        if (pult.is(":visible")) {
            var whyLernaTop = $('.pult-bottom-barrier').offset().top;
            console.log(whyLernaTop)
            $('.desktop-pult').height(whyLernaTop - 150);

            var heroRowPosition = $('.pult-top-barrier').offset().top + 24;
            $('.desktop-pult').find('.card').css({ top: heroRowPosition + 'px' })
        } else {
            console.log('pult is not visible')
        }
    }

    setupPult();

    setInterval(function() {
        setupPult();
    }, 1000)
});

var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;
$('.num').html('Faculty' + '' + currentIndex + 'of' + totalItems + '');

$('#carouselPartnersControls').carousel({
    interval: 2000
});

$('#carouselPartnersControls').bind('slid', function() {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('Faculty' + '' + currentIndex + 'of' + totalItems + '');
});


$('.num').html('Faculty' + '' + currentIndex + 'of' + totalItems + '');

$('#carouselLeadControls').carousel({
    interval: 2000
});

$('#carouselLeadControls').bind('slid', function() {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('Faculty' + '' + currentIndex + 'of' + totalItems + '');
});


$('.num').html('Faculty' + '' + currentIndex + 'of' + totalItems + '');

$('#carouselBapioControls').carousel({
    interval: 2000
});

$('#carouselBapioControls').bind('slid', function() {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('Faculty' + '' + currentIndex + 'of' + totalItems + '');
});