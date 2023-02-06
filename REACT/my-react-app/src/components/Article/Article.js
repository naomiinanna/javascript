import { useState } from "react";

function Article(props) {

    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [buttonClassName, setButtonClassName] = useState('');

    const onClick = (e) => {
        console.log(e +'test');
    }

    return <article onClick = {(onClick)}>
        <p>Name: {props.person.name}</p>
        <p>Height: {props.person.height}</p>
        <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}>
            Click - {numberOfClicks} times
        </button>
    </article>
    

}

export default Article;

