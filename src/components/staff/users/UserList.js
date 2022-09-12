import { getAllUsers } from "../../../managers/UserManager";
import { useState } from "react"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Users = () => {
    const [cultUsers, setCultUsers] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        getAllUsers().then(usersData => setCultUsers(usersData))
    }, [])

    //determine if user is staff
    const staff= (selectedUser) => {
        if (selectedUser.is_staff === true) {
            return "Staff"
        }
        else {
            return "Customer"
        }
    }

    const active= (selectedUser) => {
        if (selectedUser.is_active === true) {
            return "Active"
        }
        else {
            return "Inactive"
        }
    }

    return (
        <>
            
            <div className="user_container">
                <div className="userTitle">Users</div>
                {cultUsers.map((cultUser) => {
                    let userName = cultUser.user.username
                    let firstName = cultUser.user.first_name
                    let lastName = cultUser.user.last_name
                    let profileType = staff(cultUser.user)
                    let activationStatus = active(cultUser?.user)

                    return <section className="userBox" key={cultUser.id}>
                        <div className="user" >

                        <div value={cultUser.id}>Name: {firstName} {lastName}</div>
                        <div value={cultUser.id}>Display Name: {userName}</div>
                        <div value={cultUser.id}>Profile Type: {profileType}</div>
                        <div value={cultUser.id}>Activation Status: {activationStatus}</div>

                        </div>
                        <Link to={`/users/${cultUser.id}`}>
                            <div value={cultUser.id}>See Details</div>
                        </Link>
                        <Link to={`/users/${cultUser.id}/edit`}>
                            <div value={cultUser.id}>Edit User</div>
                        </Link>
                        
                    </section>
                })}
                <button type="submit"
                    onClick={() => {
                        navigate(`/home`)
                    }} 
                    className="button is-success">Home
                </button>
            </div>
        </>
    )

}
