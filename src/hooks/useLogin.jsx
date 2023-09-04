import { useEffect, useState } from "react";
import { getFirstName } from "../services/auth.services";

export default function useLogin() {
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setFirstName(getFirstName(token));
        } else {
            window.location.href = "/login";
        }
        setFirstName(getFirstName(token))
    }, []);

    return firstName;
}