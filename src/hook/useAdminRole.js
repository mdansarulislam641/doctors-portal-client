import { useState } from "react"
import { useEffect } from "react"

const useAdminRole = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data.isAdmin)
            setIsAdminLoading(false);
        })
    },[email])
    return [isAdmin,isAdminLoading];
}

export default useAdminRole;