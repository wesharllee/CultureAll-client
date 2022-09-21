import { Link, useNavigate } from "react-router-dom"
import "./css/impact.css"

export const ImpactPage = () => {

    const navigate = useNavigate()

    return <>
        <section className="section">
            <div className="impact-header">
                <div className="impact-header-title">
                    What Will Your Impact Be?
                </div>
            </div>
            <article className="impact-point-container-a">

                <img className="impact-circle-img" src="https://res.cloudinary.com/wescloud/image/upload/v1663700093/Culture%20All/F7EA3CF1-D5D6-454F-8558-9C38E01B01B6_2_zzcr5k.jpg" />
                <div className="impact-point-box">
                    <p className="impact-point">
                        Gather Employee Feedback
                    </p>
                    <div className="about-impact-point">
                        We gather feedback through the use of our sequenced questionnaires
                        that each cater to specific work environment factors . We guarantee
                        anonymity to encourage employee participation and honesty. As your
                        companies pain points become more clear, we deep dive for more
                        specifics in each category. Once we’ve gathered your results we
                        provide you access to your metrics in your company specific portal.
                        You will receive a score on the overall happiness of your employees,
                        and then scores for each subsequent category polled. From here, you
                        will know what you’re doing right and areas for improvement. These
                        are yours to keep.
                    </div>
                </div>
            </article>
            <article className="impact-point-container-b">
                <img className="impact-circle-img" src="https://res.cloudinary.com/wescloud/image/upload/v1663698810/Culture%20All/F66D6B9B-C672-4C1B-AEE1-E19BBFBCC058_copy_kk6ayc.jpg" />
                <div className="impact-point-box">
                    <p className="impact-point">
                        Utilize Data To Improve Environment
                    </p>
                    <div className="about-impact-point">
                        Next, we can compare the feedback from your employees with our data
                        sets on proven ways to improve company culture so you have a jumping
                        off point.
                    </div>
                </div>
            </article>

            <article className="impact-point-container-a">
                <img className="impact-circle-img" src="https://res.cloudinary.com/wescloud/image/upload/v1663699873/Culture%20All/FB9E9CD4-1A7E-49B4-8C90-35DE41486FA1_2_ziflpa.jpg" />
                <div className="impact-point-box">
                    <p className="impact-point" id="customize">
                        Customize Your Action Plan
                    </p>
                    <div className="about-impact-point">
                        We take it to the next level. We remove the guess work and hours of
                        research by creating an action plan customized to your companies
                        priorities and budge. Using your company’s scores gathered from each
                        category, we help you to target the pain points you believe you can
                        create the most impact in and we give you the tools to tackle them.
                    </div>
                </div>
            </article>

            <article className="impact-point-container-b">
                <img className="impact-circle-img" src="https://res.cloudinary.com/wescloud/image/upload/v1663700276/Culture%20All/2ACF7CA1-652D-451E-87BE-CD4FBAB22680_2_borkor.jpg" />
                <div className="impact-point-box">
                    <p className="impact-point">
                        Connect You With Resources
                    </p>

                    <div className="about-impact-point">
                        We connect you with our hand selected partners for help with employee
                        wellness and job perks like HR consultants, leadership coaches, Lunch
                        and Learn options, therapy programs, virtual yoga sessions, gym services
                        and benefits providers that partner with businesses.
                    </div>
                </div>
            </article>

            <div className="impact-home-box">
                <button type="submit"
                    onClick={() => {
                        navigate(`/home`)
                    }}
                    className="impact-home-buttonz">Home
                </button>
            </div>
        </section>
    </>

}