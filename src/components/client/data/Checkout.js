import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../../../managers/UserManager"

export const Checkout = () => {
    const { userId } = useParams()
    const [cultUser, setCultUser] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
        getUserById(userId).then(
            userData => setCultUser(userData)
        )
    }, [userId])

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Get Questionnaire for {cultUser.company_name}
            </p>

            <div className="panel-block">
                Insert Credit Card Capture Here
            </div>
            <div className="panel-block">
                here's my credit card and my social and my bank account and birthday
            </div>
            
        </article>
        <button type="submit"
            onClick={() => {
                
                    navigate(`/getdata/${userId}/confirmation`)
                
            }}
            className="button is-success">Checkout
        </button>
    </section>
}