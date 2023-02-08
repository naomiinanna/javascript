import { useState } from "react";
import "./Authentification.css";

function Athentification(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registeredUser = { username: "Jule", password: "jule" };
    //const user = { username, password };

    const onLogin = e => {
        e.preventDefault();
        if (username == registeredUser.username && password == registeredUser.password) {
            props.setIsLoggedIn(true);
        }
        else {
            return alert("User or password is invalid");
        }
    }
    const onLogout = e => {
        e.preventDefault();
        props.setIsLoggedIn(false);
        setUsername("");
        setPassword("");
    }

    return (
        <>
        {
            props.isLoggedIn ? 
            <form className="logout__form" onSubmit={onLogout}>
                <p>Hello {registeredUser.username}, have fun editing and publishing</p>
                <input type="submit" value="logout"></input> 
            </form> :
                <form className="login__form" onSubmit={onLogin}>
                    <input type="text" defaultValue="" onInput={e => setUsername(e.target.value)} placeholder="Username.." ></input>
                    <input type="password" defaultValue="" onInput={e => setPassword(e.target.value)} placeholder="Password.." ></input>
                    <input type="submit" value="Login"></input>
                </form>
        }
        </>
    );
}

export default Athentification;