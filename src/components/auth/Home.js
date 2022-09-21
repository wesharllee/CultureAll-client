import { Link, useNavigate } from "react-router-dom"
import "./css/home.css"

export const HomePage = ({ token }) => {

    const navigate = useNavigate()

    return <>
        <div className="home-header">
            <div className="home-header-title">
                Helping us all by creating <br />
                a world of happy employees.
            </div>
        </div>
    <section className="section">

        <div className="home-title1">
            In the era of "The Great Resignation" -we are the solution
        </div>
        <div className="home-info-container">
            <text className="home-info">
                Many polls are finding that company culture is a major deciding factor for perspective employees.
                They indicate that to many, company culture has become as important - if not more important - than employee benefits.
                <br /><br />In a society where everyone is understaffed and employee turnover is forecast to rise dramatically,
                your company has to do what it can to remain relevant and competitive to the employee pool, and adjust to better
                serve the employees already in house.
            </text>

        </div>
        <article className="create-row">
            <div className="home-link-container">
                <div className="home-linkz">
                    <Link to="/impact" className="impact-link">01 - Gather Employee Feedback</Link>
                </div>
                <div className="about-home-linkz">
                    Gather anonymous employee feedback through the use of our questionnaires pinpointing important work environment factors.
                </div>
                <div className="home-linkz">
                    <Link to="/impact" className="impact-link">02 - Compare Data With Proven Strategies</Link>
                </div>
                <div className="about-home-linkz">
                    We'll compare the feedback from your employees with our data sets on proven ways to improve company culture.
                </div>
                <div className="home-linkz">
                    <Link to="/impact#customize" className="impact-link">03 - Customize Action Plan</Link>
                </div>
                <div className="about-home-linkz">
                    We work with your business to find ways to improve employee satisfaction in alignment with your priorities and budget.
                </div>
                <div className="home-linkz">
                    <Link to="/impact" className="impact-link">04 - Connect You With Resources</Link>
                </div>
                <div className="about-home-linkz">
                    We connect you with therapy programs, gym services, coaching specialists and more that partner with businesses.
                </div>

                {/* {token ?
                    <div className="about-linkz">
                        <Link to="/dashboard" className="impact-link">Connect You With Resources</Link>
                    </div>
                    : ""
                } */}
            </div>
            <div className="home-image-container">
                <div className="home-image-overlay">
                    Custom Solutions for Your Business
                </div>
            </div>
        </article>
        <div className="learn-more-box">
            <text className="learn-more-title">We're Here to Help</text>
            <button
                onClick={() => {
                    navigate(`/us`)
                }}
                className="about-us-buttonz">learn more
            </button>
        </div>  
        <div className="happy-employee-box">
            <div className="happy-employee-title">
                Happy Employees <br/>are<br/> Loyal Employees
            </div>
            <div className="home-contact-button-container">
                <button
                    onClick={() => {
                        navigate(`/contactus`)
                    }}
                    className="home-buttonz">Get In Touch
                </button>
            </div>
        </div>
        {/* <div className="home-info-container2">
            <text className="home-info">
                Younger generations often believe that job hopping
                will help to further their career, and start-up culture
                also lends to that belief. When payroll is one of, if
                not your biggest expense, employee retention creates value.
                Good reviews from current and previous employees gives you
                an edge. What can your company do to get ahead? How will you
                make your employees happy?
                <br /><br />
                That’s where we come in!
                <br /><br />
                Custom Solutions for Your Business.
                <br /><br />
                We help you to pin point opportunities for positive change
                and connect you with the necessary resources.
            </text>
        </div> */}
        

    </section>
    </>
}