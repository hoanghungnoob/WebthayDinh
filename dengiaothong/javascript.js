document.addEventListener('DOMContentLoaded', function () {
    const redLight = document.querySelector('.red');
    const yellowLight = document.querySelector('.yellow');
    const greenLight = document.querySelector('.green');
    const changeButton = document.getElementById('change-light');

    let currentLight = 'red';

    function changeLight() {
        switch (currentLight) {
            case 'red':
                redLight.style.backgroundColor = 'gray';
                yellowLight.style.backgroundColor = '#FFFF00';
                currentLight = 'yellow';
                break;
            case 'yellow':
                yellowLight.style.backgroundColor = 'gray';
                greenLight.style.backgroundColor = '#00FF00';
                currentLight = 'green';
                break;
            case 'green':
                greenLight.style.backgroundColor = 'gray';
                redLight.style.backgroundColor = '#FF0000';
                currentLight = 'red';
                break;
            default:
                break;
        }
    }

    changeButton.addEventListener('click', changeLight);
});
