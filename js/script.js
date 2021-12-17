
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('#destination').show(1500);
        }
        if ($(this).scrollTop() >= 700) {
            $('#destination2').show(1500);
        }
        if ($(this).scrollTop() >= 1500) {
            $('#popular').show(1500);
        }
        if ($(this).scrollTop() >= 1700) {
            $('#re').show(1500);

        }
        if ($(this).scrollTop() >= 2250) {
            $('#formu').show(1500);

        }
        if ($(this).scrollTop() >= 2550) {
            $('#feed').show(1500);
        }
        if ($(this).scrollTop() >= 3200) {
            $('#brand').show(1500);
        }
    });
