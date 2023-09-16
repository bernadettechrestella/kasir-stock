import { useEffect, useState } from "react"
import { getUser } from "../services/user.services"

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUser((data) => {
            setUsers(data);
        })
    }, [])

    return users;
}