document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');
    });

    // Calculator

    // 2nd button

    const secondElements = document.getElementsByClassName('disappear-2nd');
    const thirdElements = document.getElementsByClassName('disappear-3rd');
    const secondBtn = document.getElementById('secondBtn');

    secondBtn.addEventListener('click', function() {
        for (var i = 0; i < secondElements.length; i++) {
            secondElements[i].classList.toggle('hidden');
        }
        for (var i = 0; i < thirdElements.length; i++) {
            thirdElements[i].classList.toggle('hidden');
        }
    });

});