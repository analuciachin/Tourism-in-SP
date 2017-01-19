$(document).ready(function() {
    $('#slideshow').jshowoff({
        speed: 3500,
        hoverPause: false,
        controls: true,
        links: false,
        controlText: {
            play: '',
            pause: '',
            next: 'Next',
            previous: 'Previous'
        },
        autoPlay: true
    });
});