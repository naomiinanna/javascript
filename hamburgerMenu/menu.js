const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    console.log(e.target.classList);
    document.querySelector('.menuitems').classList.toggle('visible');
});
