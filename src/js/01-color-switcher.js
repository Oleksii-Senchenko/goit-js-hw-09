const bodyEl = document.querySelector('body')
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
// btnStart.setAttribute('disabled', false)
let pressStart = null
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


function onStart({ target }) {
    pressStart = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);

    btnStart.setAttribute('disabled', '')
    btnStop.removeAttribute('disabled', '')
}

function onStop() {
    btnStop.setAttribute('disabled', '')
    btnStart.removeAttribute('disabled', '')
    clearInterval(pressStart)


}

btnStart.addEventListener('click', onStart)
btnStop.addEventListener('click', onStop)