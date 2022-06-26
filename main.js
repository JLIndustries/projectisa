document.body.onload = () => {
    document.body.style.animation = ''
    setTimeout(() => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById('heart').innerHTML = '🤍';
    }, 2050)
}