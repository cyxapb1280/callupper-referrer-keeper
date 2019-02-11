$(document).ready(function () {
    if (!window.localStorage || !document.referrer) {
        return;
    }

    if (!/https:\/\/callupper.com/i.test(document.referrer)) {
        localStorage.setItem('cu-referrer', document.referrer);
    }

    const currentRefferer = localStorage.getItem('cu-referrer');

    $('a[href^="https://app.callupper.com/signup"]')
        .each(function () {
            var $this = $(this);
            var href = $this.attr('href');
            var refferer = /.*\?((.*=.*)(&?))+/.test(href)
                ? '&referrer=' + currentRefferer
                : '?referrer=' + currentRefferer;

            $this.attr('href', href + refferer);
        });
});
