

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
