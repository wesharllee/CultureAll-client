import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllUsers, getUserById } from "../../managers/UserManager"
import "./css/dashboard.css"

export const Dashboard = () => {
    const [cultUser, setCultUser] = useState({})
    const { userId } = useParams()

    useEffect(() => { getUserById(userId).then(userData => setCultUser(userData)) }, [userId])


    const firstName = cultUser?.user?.first_name
    const company = cultUser.company_name
    const id = cultUser?.user?.id
    return <section className="section-container">
            <article className="dash-outer-container">
                <div className="dash-title1">
                    Welcome {firstName}
                </div>

                <div className="dash-inner-container">
                    {/* <div className="dash-image-container"> */}
                        <img className="dash-circle-img" src="https://res.cloudinary.com/wescloud/image/upload/v1663769873/Culture%20All/C84C7CF7-72E4-4FDF-A114-F07DE84A2B0E_2_wnx4tk.jpg"/>
                    {/* </div> */}
                    <div className="dash-link-container">
                        <div className="dash-title2">{company}'s Dashboard</div>
                        <div className="dash-linkz">
                            <Link to={`/mydata/${userId}`} className="dash-title3">{company}'s Data</Link>
                        </div>
                        <div className="dash-linkz">
                            <Link to={`/getdata/${userId}`} className="dash-title3">Get Data</Link>
                        </div>
                        <div className="dash-linkz">
                            <Link to={`/consultation/${userId}`} className="dash-title3">Book Consultation</Link>
                        </div>
                    </div>
                </div>
            </article>

    </section>

}
