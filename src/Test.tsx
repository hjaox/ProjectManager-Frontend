import { getUsers } from "./lib/axios/users";

export default function Test() {
    function handleClick() {
        getUsers()
        .then(data => {
            console.log(data)
        })
    }
    return (
        <button onClick={handleClick}>test</button>
    )
}