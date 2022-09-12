import { useNavigate } from "react-router"

export const AboutUsPage = () => {

    const navigate = useNavigate()

    return <section className="section">
        <article className="panel is-info">
        <p className="panel-heading">
            About Us    
        </p>    

        <div className="panel-block">
            Blah Blah Blah
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