import axios from "axios";

export const getUser = (callback) => {
    axios
        .get('https://dummyjson.com/users')
        .then((res) => {
            callback(res.data.users);
        })
        .catch((err) => {
            console.log(err)
        })
}