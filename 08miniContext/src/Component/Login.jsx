import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext.js";
 // Ensure the import matches the context name
 function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    // Use the context correctly
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the user context with the entered username and password
        setUser({ Username, Password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            {" "}
            <input
                type="password" // Corrected to type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default Login;