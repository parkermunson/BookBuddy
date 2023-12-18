import { Link } from "react-router-dom"

const Navigations = ({user}) => {
    
    
    return (
        <nav>
            <Link to='/books'>BOOKS</Link>
            {
                user.email ? (
                    <span>
                        <Link to="/account">MY ACCOUNT</Link>
                    </span>
                
                ) : (
                    
                    <span>
                        <Link to="/login">LOGIN</Link>
                        <Link to='/register'>REGISTER</Link>
                    </span>
                )
            }
        </nav>
    )
}

export default Navigations