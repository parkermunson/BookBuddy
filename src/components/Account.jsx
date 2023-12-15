import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


const Account = ({user, setUser, setToken }) => {
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
                setReservations(response.data)
                console.log(response.data)
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
    if(!user.books){
        return null
    }
    
    return (
        <div>
          <h1>Account</h1>
          <button onClick={() => { logout() }}>Logout</button>
          <hr />
          <h2>Email: {user.email}</h2>
          <h4>Your Reservations: </h4>
          <ul>
            {reservations.reservation.map((book) => (
              <li key={book.id}>
                <p>{book.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )
}

export default Account