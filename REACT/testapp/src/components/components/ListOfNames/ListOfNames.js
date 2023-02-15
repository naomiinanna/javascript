function ListOfNames() {
    const names = ["Emma", "Hanna", "Tom", "Emil"];

    return (
        <div className="ListOfNames">
            <ul>
                {
                    names.map((name, i) => <li key={i}>{name}</li>)
                }
            </ul>
        </div>
    );
}

export default ListOfNames;