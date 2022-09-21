import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteConsultRequest, getConsultRequestById } from "../../../managers/ConsultationManager"
import { getAllUsers } from "../../../managers/UserManager"

export const ConsultConfirm = () => {
    const [request, setRequest] = useState({})
    const { requestId } = useParams()
    const [cultUsers, setCultUsers] = useState([])
    const [cultUser, setCultUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getConsultRequestById(requestId).then(
            requestData => setRequest(requestData)
        )
    }, [requestId])


    useEffect(() => {
        getAllUsers().then(usersData => setCultUsers(usersData))
    }, [])


    let userId = parseInt(localStorage.getItem('user_id'))

    const matchUsers = (userId, cultUsers) => {
        for (let cultUser of cultUsers) {
            if (cultUser.user.id === userId) {
                return cultUser
            }
        }
    }

    useEffect(() => {
        if (cultUsers.length) {
            setCultUser(matchUsers(userId, cultUsers))
        }
    }, [cultUsers])

    let name = request?.cult_user?.user?.first_name
    let time = request?.readable_time
    let date = request?.readable_date
    let address = request?.address
    let inPerson = request.in_person ? `address: ${address}` : "online"



    return <section className="section">
        <article className="consult-background">

                <div className="consult-confirm-container">
                    <p className="consult-thank-you">
                        Thanks {name}
                    </p>

                    <div className="we-will-consult">
                        You have requested a meeting <br /> on: {date} <br />at: {time} <br /> {inPerson}
                    </div>
                    <div className="panel-block">
                        We Will Contact You Within 24 Hours
                    </div>

                    <div className="consult-button-box">
                        <button type="edit"
                            onClick={() => {
                                navigate(`/consultation/${requestId}/edit`)
                            }}
                            className="consult-buttonz">Edit
                        </button>
                        <button type="delete"
                            onClick={() => {
                                deleteConsultRequest(requestId).then(() => {
                                    navigate(`/dashboard/${cultUser.id}`)
                                })
                            }}
                            className="consult-cancel-buttonz">Delete
                        </button>
                    </div>
                </div>
            <div className="consult-bottom-button-box">
                <button type="submit"
                    onClick={() => {
                        navigate(`/dashboard/${cultUser.id}`)
                    }}
                    className="consult-dashboard-buttonz">Dashboard
                </button>
            </div>

        </article>
    </section>
}