
// Модальные окна
var $formPopup = document.getElementById('popup');
var $formPopupSucces = document.getElementById('popup-2');
// Слайдер с предложениями
var $ourOffersSlider = document.querySelector('.our-offers-slider');
var $yMapOurOffers = document.querySelector('.offers-slider-container__yMap');
var $ourOffersRightItem = document.querySelector('.main__our-offers__items__item-right');
var $yMapRight = document.querySelector('.yMap-right');


function showContactCall() {
    $formPopup.style.display = 'block';
    $formPopup.style.opacity = 1;
}
function closeContactForm() {
    // 1
    $formPopup.style.display = 'none';
    $formPopup.style.opacity = 0;
    // 2
    $formPopupSucces.style.display = 'none';
    $formPopupSucces.style.opacity = 0;

}
function showContactCallSucess() {
    // 1
    $formPopup.style.display = 'none';
    $formPopup.style.opacity = 0;
    // 2
    $formPopupSucces.style.display = 'block';
    $formPopupSucces.style.opacity = 1;
}
function showMap() {
    // Скрываем слайдер с предложениями
    $ourOffersSlider.style.display = 'none';
    // Скрываем переключение слайдов с предложениями
    $ourOffersRightItem.style.display = 'none';
    // Отображаем блок yandexMap
    $yMapOurOffers.style.display = 'block';
    // Отображаем 'Подобрать участок'
    $yMapRight.style.display = 'block';

}
function showOffers() {
    // Скрываем блок yandexMap
    $yMapOurOffers.style.display = 'none';
    // Скрываем 'Подобрать участок'
    $yMapRight.style.display = 'none';
    // Показываем слайдер с предложениями
    $ourOffersSlider.style.display = 'block';
    // Показываем переключение слайдов с предложениями
    $ourOffersRightItem.style.display = 'flex';
    
}