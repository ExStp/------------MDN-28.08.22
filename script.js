const scroller_btn = document.querySelector('#scroller_button');
const html = document.querySelector('html');
const p = document.querySelector('p');

scroller_btn.onclick = function (event) {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', function (event) {
    scroller_btn.innerHTML = Math.floor(this.scrollY)
})

window.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown'
        || event.key == 'ArrowLeft' || event.key == 'ArrowRight') event.preventDefault()
})

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;

}

theme.addEventListener('change', function () {
    if (theme.value === 'white') {
        update('white', '#595959');
    } else if (theme.value === 'black') {
        update('black', 'white');
    }
})