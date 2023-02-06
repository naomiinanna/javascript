import './Buttons.css';
import { useState } from "react";



function Buttons(props) {

    const clickNumButton = e => { props.setResult(props.resultP * 10 + parseInt(e.target.name)) }

    const [previousResult, setPreviousResult] = useState(0);

    const [operation, setOperation] = useState();

    const clickOperator = e => {
        setPreviousResult(props.resultP);
        if(e.target.name == '=') {
            switch (operation) {
                case '+':
                    props.setResult(previousResult + props.resultP);
                    break;
                case '-':
                    props.setResult(previousResult - props.resultP);
                    break;
                case '/':
                    props.setResult(previousResult / props.resultP);
                    break;
                case 'x':
                    props.setResult(previousResult * props.resultP);
                    break;
            }
        }else if(e.target.name == 'AC') {
            props.setResult(0);
            setPreviousResult(0);
        }
        
        else {
            props.setResult(0);
            setOperation(e.target.name);
        }
    }

    return (
        <div className="buttons">
            <button name="AC" onClick={clickOperator}>AC</button>
            <button name="/" className='operate' onClick={clickOperator}>/</button>

            <button name="7" onClick={clickNumButton}>7</button>
            <button name="8" onClick={clickNumButton}>8</button>
            <button name="9" onClick={clickNumButton}>9</button>
            <button name="x" className='operate' onClick={clickOperator}>x</button>

            <button name="4" onClick={clickNumButton}>4</button>
            <button name="5" onClick={clickNumButton}>5</button>
            <button name="6" onClick={clickNumButton}>6</button>
            <button name="-" className='operate' onClick={clickOperator}>-</button>

            <button name="1" onClick={clickNumButton}>1</button>
            <button name="2" onClick={clickNumButton}>2</button>
            <button name="3" onClick={clickNumButton}>3</button>
            <button name="+" className='operate' onClick={clickOperator}>+</button>

            <button name="0" onClick={clickNumButton}>0</button>
            <button name="=" onClick={clickOperator}>=</button>

        </div>

    );
}

export default Buttons;