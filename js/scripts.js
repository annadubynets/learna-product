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