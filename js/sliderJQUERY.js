// 1 - Слайдер с деньгами
$("#main__choose-dacha__container__slider-container-money").slider({
    min: 1000,
    max: 3000000,
    value: 500000,
    animate: "slow",
    range: "min",
    
    slide: function (event, ui) { 
        $(".main__choose-dacha__price-block__price__money1").val(ui.value);
    }
});
// 2 - Слайдер с участками
$("#main__choose-dacha__container__slider-container-uchastki").slider({
    min: 1000,
    max: 3000000,
    value: 500000,
    animate: "slow",
    range: "min",
    
    slide: function (event, ui) { 
        $("main__choose-dacha__price-block__price__dacha1").val(ui.value);
    }
});