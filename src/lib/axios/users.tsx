import { instance } from "./instance";

export function getUsers() {
    return instance.get(`/api/users`)
    .then(({data : {users}}) => {
        return users
    })
}