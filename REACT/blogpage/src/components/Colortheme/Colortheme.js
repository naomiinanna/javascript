import './Colortheme.css';

function Colortheme(props) {

    const onColorThemeChange = e => {
        if (e.target.value == 'dark') {
            props.setContainerClassName("container" + " colortheme--dark");
        } else if(e.target.value == 'pink') {
            props.setContainerClassName("container" + " colortheme--pink");
        }else {
            props.setContainerClassName("container");
        }

    }

    return (
        <div onChange={onColorThemeChange} className="colortheme__wrapper"> Choose your colortheme:
            <input type="radio" value="light" defaultChecked={props.containerClassName === "container"} name="colortheme"></input>light
            <input type="radio" value="dark"defaultChecked={props.containerClassName === "container colortheme--dark"} name="colortheme"></input>dark
            <input type="radio" value="pink" defaultChecked={props.containerClassName === "container colortheme--pink"} name="colortheme"></input>pink
        </div>
    );
}

export default Colortheme;