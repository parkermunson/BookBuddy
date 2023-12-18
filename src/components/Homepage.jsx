import { Link } from "react-router-dom"
import React from "react"

const Homepage = () => {
    const user = window.localStorage.getItem('token')
    console.log(user)

    return (
        <div>
            {user ? <h3 id="welcome-message">Welcome fellow reader!</h3> : null}
        <div className="homepage-image-container">
        <img className="homepage-image" src="src/assets/homepageImg.jpeg" alt="Homepage" />
        </div>
        <div>
            <h1 id="tagline">BOOKS YOU PROBABLY SHOULD HAVE READ BY NOW</h1>
            <p id="textbox">It's never too late to start reading the books<br />you've lied about having already read.</p>
            </div>
            <div className="read-button-container">
                <button className="read-button">
                    <Link to='/books'>START READING</Link>
                </button>
            </div>
        </div>
    )
}

export default Homepage