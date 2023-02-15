import { useState } from "react";

function ListOfStars() {

    const [stars, setStars] = useState(0);


    const onSubmit = e => {
        let starsAsString = "";
        console.log(stars);
        for (const element of stars) {
            starsAsString += "*";
            console.log("*")
        }
    }


    return (
        <div className="ListOfStars">
            <form onSubmit={onSubmit}>
                <input type="text" onInput={(e) => setStars(e.target.value)}></input>
                <input type="submit" value="Submit Number of Stars"></input>
            </form>
            <div className="result">
                {stars}
            </div>
        </div>
    )
}

export default ListOfStars;