import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
        <div>
            <Link to='/'> Home </Link>
            <br />
            <Link to='/books'> Library </Link>
            <br />
            <Link to='/AboutUs'> About Us </Link>
        </div>
        <div>
            <Link to='/' id="footer-logo">Classics</Link>

        </div>
        </div>
    )
}

export default Footer