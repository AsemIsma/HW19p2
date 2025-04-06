const lightOn = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
const lightOff = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
document.querySelector('body').style.backgroundColor = '#000000';

document.querySelector("#img").addEventListener('click', () => {
    if (document.querySelector('img').src === lightOn) {
        document.querySelector('img').src = lightOff;
        document.querySelector('body').style.backgroundColor = '#000000';
    } else if (document.querySelector('img').src === lightOff) {
        document.querySelector('img').src = lightOn;
        document.querySelector('body').style.backgroundColor = '#ffffff';
    }
});