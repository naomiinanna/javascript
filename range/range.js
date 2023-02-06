const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    document.body.appendChild(wrapper);


document.querySelector('#range-input').addEventListener('change', e => {
    wrapper.querySelectorAll('.box').forEach(element => element.remove());
        for (let i = 0; i < e.target.value; i++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
            box.style.setProperty('background-color', randomColor);
            wrapper.appendChild(box);
        }
});