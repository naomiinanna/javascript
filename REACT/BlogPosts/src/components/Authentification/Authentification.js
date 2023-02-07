import { useState } from "react";

function Athentification(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const user = {username, password};

    const onLogin = e => {
        e.preventDefault();
        props.isLoggedIn(user);
        console.log()
    }

    return (
        <form className="login__form" onSubmit={onLogin}>
            <h3>LOGIN</h3>
            <input type="text" onInput={e => setUsername(e.target.value)} placeholder="Username.." ></input>
            <input type="password"onInput={e => setPassword(e.target.value)} placeholder="Password.." ></input>
            <button type="submit">Login</button>
        </form>
    );
}

export default Athentification;