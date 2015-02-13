/*
    Created on : 12/02/2015, 7:06:03 PM
    Author     : Robin Spark
*/


jQuery(function () {
    //Box 1: reveal immediately - on page load
    //NOTE: id does refer to an element id, It is used to
    //      uniquely refer to the element to be revealed.
    var options1 = {
        id: 'box1'
    };
    $('.box1').initReveal(options1);

    //------------------------
    //Box 2: reveal after specified delay
    var options2 = {
        id: 'box2'
        , delay: 3000
        , background: '#555'
    };
    $('.box2').initReveal(options2);

    //------------------------
    //Box 3: reveal on event - eg. onclick
    var options3 = {
        id: 'box3'
        , auto: false
    };
    var box3 = $('.box3');
    box3.initReveal(options3);

    $('.btn-reveal').on('click', function () {
        box3.performReveal(options3);
    });

    //------------------------
    //Box 4: Reveal when element scrolls into the viewport
    var options4 = {
        id: 'box4'
        , auto: false
        , trigger: 'on-visible'
    };
    $('.box4').initReveal(options4);
});
