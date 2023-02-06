import './Header.css';

function Header(props) {



    return <header className='Header'>
        <ul>
            { props.person.map((1, i) => <li key{i}>{1}</li>) }
        </ul>
    </header>;
}

export default Header;