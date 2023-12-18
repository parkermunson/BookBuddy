import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <div className="homepage-image-container">
            <img className="homepage-image" src="src/assets/homepageImg.jpeg" />

            <h1 id="tagline">BOOKS YOU PROBABLY SHOULD HAVE READ BY NOW</h1>
            
            <p id="textbox">It's never too late to start reading the books<br />you've lied about having already read.</p>
            
            <div className="read-button-container">
                <button className="read-button">
                    <Link to='/books'>START READING</Link>
                </button>
            </div>

        </div>
    )
}

export default Homepage