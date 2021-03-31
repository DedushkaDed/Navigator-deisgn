// 1 - Слайдер с деньгами
$("#main__choose-dacha__container__price-block__wrapper-slider__slider1").slider({
    min: 1000,
    max: 3000000,
    values: [380249, 1907101],
    animate: "slow",
    range: true,
    
        // main__choose-dacha__container__price-block__total__money1
        slide : function(event, ui) {    
            $("#main__choose-dacha__container__price-block__total__money1").text(ui.values[ 0 ] + " ₽");
            $("#main__choose-dacha__container__price-block__total__money2").text(ui.values[ 1 ] + " ₽");
        }

});
// 2 - Слайдер с участками
$("#main__choose-dacha__container__price-block__wrapper-slider__slider2").slider({
    min: 1,
    max: 15,
    value: 6,
    animate: "slow",
    range: true,
    
    slide: function (event, ui) { 
        $("#main__choose-dacha__container__price-block__total__dacha1").text(ui.values[ 0 ] + " соток");
        $("#main__choose-dacha__container__price-block__total__dacha2").text(ui.values[ 1 ] + " соток");
    }
});