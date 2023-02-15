function RandomQuote() {

    const quotes = [
        "Quote 1",
        "Quote 2",
        "Quote 3",
    ]

    const onClick = e => {
        console.log("click")
    }

    return (
        <div className="RandomQuote">
            <button onClick={onClick}>Random Quote</button>
            <div className="result">
                {}
            </div>
        </div>
    )
}

export default RandomQuote;