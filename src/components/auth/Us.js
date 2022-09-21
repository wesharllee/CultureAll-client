import { useNavigate } from "react-router"
import "./css/us.css"
export const AboutUsPage = () => {

    const navigate = useNavigate()

    return <>
        <div className="us-top-bar"></div>
    <section className="section">
        <div className="us-header">
            <div className="us-header-title">
                Who We Are
            </div>
        </div>
        <article className="us-info-container">
            {/* <text className="line">________________________________________________________________</text> */}
            <text className="us-info">
                Culture-All started from our founders’ personal experiences
                with company culture within the workplace, paired with many
                conversations with our friends and coworkers.  With every
                new job and with each new conversation it became increasingly
                clear that the same common issues and complaints reside within
                vastly different industries and roles. Though it's clear to us, it isn’t
                always clear to the decision makers within the workplace, especially
                as the work landscape continues to rapidly shift.
                <br /><br />
                Our generation is re-writing what we expect from our employers so that
                we can give our all to the companies we work for and still maintain a
                healthy and happy lifestyle.<br />
                We started Culture All because we dared to dream that companies today
                might be ready to create positive change in terms of company culture.
                We are here to bridge the gap between corporations and their employees
                because we know that happy employees make a happy world.

            </text>
            {/* <text className="line">________________________________________________________________</text> */}
            <text className="ghandi-quote">
                “Be the Change You Wish to See In the World” - Ghandi
            </text>
        </article>
    </section>
        <div className="us-home-box">
            <text className="us-home-title"></text>
        <div>
            <button type="submit"
                onClick={() => {
                    navigate(`/home`)
                }}
                className="us-home-buttonz">Home
            </button>
        </div>
        </div>
</>
}