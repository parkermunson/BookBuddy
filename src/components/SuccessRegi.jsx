import { Link } from "react-router-dom"

const SuccessRegi = () => {
    return(
        <div className="regi-container">
            <h1 id="thanks">THANK YOU FOR REGISTERING!</h1>
            <h3>Before you can start reding, you need to login with your account.</h3>
            <button className="login-button">
                <Link to='/login'> LOGIN </Link>
            </button>
        </div>
    )
}

export default SuccessRegi