import { useState } from "react"

export default function Login() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function handleUsernameInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setUsername(event.target.value);
    }

    function handlePasswordInput(event : React.ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value);
    }

    function handleSubmit(event : React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <form id="loginForm"
        onSubmit={event => handleSubmit(event)}>
            <input name="usernameInput"
            id="usernameInput"
            type="text"
            onChange={event => handleUsernameInput(event)} />
            <input name="passwordInput"
            id="passwordInput"
            type="text"
            onChange={event => handlePasswordInput(event)} />
            <button
            type="submit"
            form="loginForm">
                Login
            </button>
        </form>
    )
}