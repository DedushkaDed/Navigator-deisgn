

function showContactCall() {
    let $form = document.getElementById('popup');
    $form.style.display = 'block';
    $form.style.opacity = 1;
}
function closeContactForm() {
    let $form = document.getElementById('popup');
    let $formSucces = document.getElementById('popup-2');
    $form.style.display = 'none';
    $form.style.opacity = 0;
    $formSucces.style.display = 'none';
    $formSucces.style.opacity = 0;

}
function showContactCallSucess() {
    let $form = document.getElementById('popup');
    $form.style.display = 'none';
    $form.style.opacity = 0;

    let $formSucces = document.getElementById('popup-2');
    $formSucces.style.display = 'block';
    $formSucces.style.opacity = 1;
}