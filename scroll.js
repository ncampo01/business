$(document).ready(function() {
    // Add the scrolled class to the navbar when the page is scrolled
    $(document).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});