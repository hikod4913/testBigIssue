

$(document).ready(function () {
    // touch & slide on tablet & mobile 
    $(".carousel").on("touchstart", function (event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });

    // 點選連結後，關閉 mobile menu
    $(".closeMenu").click(function () {
        $("#headerMenuCtrl").click()
    })

    // RWD Maps
    $('img[usemap]').rwdImageMaps();
    

})

