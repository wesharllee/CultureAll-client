import { Link, useNavigate } from "react-router-dom"

export const ContactConfirmationPage = () => {

    const navigate = useNavigate()

    return <section className="section">
        <article className="contact-background">
            <div className="thank-you-container">
                <div className="contact-form-container">
                    <p className="thank-you">
                        Thank You
                    </p>
                    <div className="we-will-contact">
                        We Will Contact You Within 24 Hours
                    </div>
                    <div className="contact-button-box">
                        <button type="submit"
                            onClick={() => {
                                navigate(`/home`)
                            }}
                            className="contact-buttonz">Home
                        </button>
                    </div>
                </div>
            </div>
        </article>
    </section>

}