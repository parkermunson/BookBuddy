import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


const Account = ({ user, setUser, setToken }) => {
    const [reservations, setReservations] = useState([])
    const navigate = useNavigate()




    useEffect(() => {
        const loggedInToken = window.localStorage.getItem('token')

        const fetchReservations = async () => {
            try {
                const response = await axios.get(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`, {
                    headers: {
                        'Authorization': `Bearer ${loggedInToken}`
                    }
                })
                setReservations(response.data.reservation)
                console.log(response.data.reservation)

            } catch (error) {
                console.log('An error occurred while trying to get your reservations:', error.message)
            }
        }
        fetchReservations()
    }, [])


    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if (!user.books) {
        return null
    }


    const handleBookReturn = async (reservationId) => {
        const loggedInToken = window.localStorage.getItem('token')

        try {
            const response = await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,
            {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${loggedInToken}`
                    }
                })
                console.log(response.data)

                if (response.data.deletedReservation) {
                    setReservations((prevReservations) => {
                        return prevReservations.filter(reservation => reservation.id !== reservationId);
                    })
            console.log('Book returned successfully');
        } else {
            console.error('Unexpected response format after returning the book:', response.data);
        }
    } catch (error) {
        console.error('An error occurred while trying to return the book:', error.message);
    }
};

    if (!user.books || !reservations) {
        return null;
    }


    return (
        <div className="account-container">
            <h1 className="my-account">My Account</h1>
            <hr />
            <p>Your email is:</p>
            <h2>{user.email}</h2>
            <button className="logout-button" onClick={() => { logout() }}>Logout</button>
            <hr />
            <div className="reservations-container">
            <h1 className="my-account">Your Reservations: </h1>
            {reservations.length > 0 ? (
            <ul className="reservations-list">
                {reservations.map((book) => (
                    <li className="reservations-item" key={book.id}>
                        <img src={book.coverimage} className="book-cover"/>
                        <h3 className="reservation-book-title">{book.title} | </h3>
                        <p>{book.author}</p>
                        <button className="return-button" onClick={() => handleBookReturn(book.id)}>Return Book</button>
                    </li>
                ))}
            </ul>
            ) : (
                <p>Your reservations are empty!</p>
            )}
            </div>
            <hr />

        </div>
    )
}

export default Account