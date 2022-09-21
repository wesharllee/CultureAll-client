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
        <div className="data-section-container">
            <article className="checkout-outer-container">
                <p className="data-title2">
                    Get Questionnaire for {cultUser.company_name}
                </p>
                <div className="checkout-inner-container">
                    <div className="panel-block">
                        Insert Credit Card Capture Here
                    </div>
                    <div className="panel-block">
                        here's my credit card and my social and my bank account and birthday
                    </div>
                </div>

                <button type="submit"
                    onClick={() => {

                        navigate(`/getdata/${userId}/confirmation`)

                    }}
                    className="data-agree-buttonz">Checkout
                </button>
            </article>
        </div>
    </section>
}