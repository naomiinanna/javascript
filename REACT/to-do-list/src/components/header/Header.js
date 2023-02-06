function Header(props) {

    //imperative
    let array = [1, 3, 4, 5];

    function doubles(array) {
        const newArray = [];
        for(const item of array) {
            newArray.push(item*2);
        }
        return newArray;
    }



    //declarative
    let arr = [1, 2, 3 ,4 ];

    function doubles(arr) {
        return arr.map(i => i*2);
    }


    result = Array(10).map(i => <button>{i}</button>)

    [1, 3].map(() => null)
    [1, 3].reduce(() => null)
    [1, 3].filter(() => null)
    [1, 3].some(() => null)

    return (
        <header>
            <h1>ToDo</h1>
            {props.children}
            {Array(10).map(i => <button>{i}</button>)}
        </header>
    )
}

export default Header;

//export {someString, someString2}