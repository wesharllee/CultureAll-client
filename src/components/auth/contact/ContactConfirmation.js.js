import { Link, useNavigate } from "react-router-dom"

export const ContactConfirmationPage = () => {

    const navigate = useNavigate()

    return <section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                Thank You    
            </p>    

            <div className="panel-block">
                We Will Contact You Within 24 Hours
            </div>
        </article>   
        <button type="submit"
            onClick={() => {
                navigate(`/home`)
            }} 
            className="button is-success">Home
        </button>        
    </section>

}