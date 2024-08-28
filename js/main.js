const boxbg = document.createElement('div');
boxbg.id = "boxbg";
document.body.appendChild(boxbg);

const images = document.querySelectorAll('.wrapper');
images.forEach(image => {
    image.addEventListener('click', e => {
        console.log('click')
    })
})