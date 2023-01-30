

document.querySelector('#range-input').addEventListener('change', e => {
    console.log(e.target.value);
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    document.body.appendChild(wrapper);
        for (let i = 0; i < e.target.value; i++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            wrapper.appendChild(box);
        }
});


const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

document.documentElement.style.setProperty('--randomColor', randomColor);