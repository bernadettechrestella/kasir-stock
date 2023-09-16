import axios from "axios"
import jwtDecode from "jwt-decode";

export const login = (data, callback) => {
    axios
        .post('https://dummyjson.com/auth/login', data)
        .then((res) => {
            callback(true, res.data.token);
        })
        .catch((err) => {
            callback(false, err)
        })
}

export const getFirstName = (token) => {
    const decoded = jwtDecode(token);
    return decoded.firstName
}

export const getUserID = (token) => {
    const decoded = jwtDecode(token);
    return decoded.id
}