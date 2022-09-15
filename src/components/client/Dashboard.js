import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllUsers, getUserById } from "../../managers/UserManager"

export const Dashboard = () => {
    const [cultUser, setCultUser] = useState({})
    const { userId } = useParams()

    useEffect(()=> {getUserById(userId).then(userData => setCultUser(userData))}, [userId])


    const firstName = cultUser?.user?.first_name
    const id = cultUser?.user?.id
    return <section className="section">
                <article className="panel is-info">
                    <p className="panel-heading">
                        Welcome {firstName}   
                    </p>    

                    <div className="panel-block">
                        <Link to={`/mydata/${userId}`} className="impact-link">My Data</Link>
                    </div>
                    <div className="panel-block">
                        <Link to={`/getdata/${userId}`} className="impact-link">Get Data</Link>
                    </div>
                    <div className="panel-block">
                        <Link to={`/consultation/${userId}`} className="impact-link">Book Consultation</Link>
                    </div>
                </article>        
    </section>

}
