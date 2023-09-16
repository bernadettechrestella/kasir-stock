import { useEffect, useState } from "react";
import { getFirstName, getUserID } from "../services/auth.services";

export default function useLogin() {
    const [firstName, setFirstName] = useState("");
    const [userID, setUserID] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setFirstName(getFirstName(token));
            setUserID(getUserID(token));
        } else {
            window.location.href = "/login";
        }
        setFirstName(getFirstName(token))
        setUserID(getUserID(token))
    }, []);

    return {firstName, userID}
}