import { Link, useNavigate } from "react-router-dom"

export const HomePage = () => {

    const navigate = useNavigate()

    return <section className="section">
        <article className="panel is-info">
        <p className="panel-heading">
            Home    
        </p>    

        <div className="panel-block">
            <Link to="/impact" className="impact-link">Gather Feedback</Link>
        </div>
        <div className="panel-block">
            <Link to="/impact" className="impact-link">Compare Data With Proven Strategies</Link>
        </div>
        <div className="panel-block">
            <Link to="/impact" className="impact-link">Customize Action Plan</Link>
        </div>
        <div className="panel-block">
            <Link to="/impact" className="impact-link">Connect You With Resources</Link>
        </div>
        </article>        
        <button type="submit"
            onClick={() => {
                navigate(`/us`)
            }} 
            className="button is-success">About Us
        </button>
        <button type="submit"
            onClick={() => {
                navigate(`/contactus`)
            }} 
            className="button is-success">Contact Us
        </button>
    </section>

}