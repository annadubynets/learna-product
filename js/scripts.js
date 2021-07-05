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

function setupCarousel(selector) {
    let carouselElement = $(selector);

    // init carousel control
    carouselElement.carousel({
        interval: 2000
    });

    let title = carouselElement.attr('data-title');
    let totalItems = carouselElement.find('.carousel-item').length;
    let currentIndex = 1;

    if (title) {
        title = '<span class="mr-1">' + title + '</span>';
    } else {
        title = '';
    }

    carouselElement.on('slide.bs.carousel', function(e) {
        currentIndex = $(e.relatedTarget).index() + 1;
        console.log(currentIndex)
        carouselElement.find('.carousel-page-indicator').html(title + currentIndex + ' of ' + totalItems);
    });

    carouselElement.find('.carousel-page-indicator').html(title + currentIndex + ' of ' + totalItems);
}
