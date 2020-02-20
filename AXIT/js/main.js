/*jslint browser: true*/
/*global $*/
$(function () {
    'use strict';
    // transition taps
    $('.transition-taps .taps a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
