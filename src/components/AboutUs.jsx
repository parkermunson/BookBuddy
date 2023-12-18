import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <div>
        <div className="about-container">
            <p id="about"> We've got all the books you haven't gotten around to reading...yet.</p>
        </div>
        <div className="read-button-container">
        <button className="read-button">
                    <Link to='/books'>START READING</Link>
                </button>
        </div>
        </div>
    )
}

export default AboutUs