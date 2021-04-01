
// Модальные окна
var $formPopup = document.getElementById('popup');
var $formPopupSucces = document.getElementById('popup-2');
// Слайдер с предложениями
var $ourOffersSlider = document.querySelector('.our-offers-slider');


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
    
    $ourOffersSlider.style.display = 'none';
}
function showOffers() {
    $ourOffersSlider.style.display = 'block';
}