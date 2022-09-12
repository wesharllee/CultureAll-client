import { Link, useNavigate } from "react-router-dom"

export const ImpactPage = () => {

    const navigate = useNavigate()

    return <section className="section">
        <article className="panel is-info">
        <p className="panel-heading">
            Home    
        </p>    

        <div className="panel-block">
            Feedback Stuff
        </div>
        <div className="panel-block">
            Data and Strategy Stuff
        </div>
        <div className="panel-block">
            Customizable Action Plan Stuff
        </div>
        <div className="panel-block">
            Resource Connection Stuff
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