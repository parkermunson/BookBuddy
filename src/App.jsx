import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'
import Navigations from "./components/Navigations"
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import SuccessRegi from './components/SuccessRegi'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'



function App({books}) {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    const fetchBookList = async () => {
      const { data } = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      // console.log(data.books)
      setBookList(data.books)
    }
    fetchBookList()
  }, [])


useEffect(() => {
  const attemptLogin = async () => {
    const loggedInToken = window.localStorage.getItem('token')


    if (loggedInToken) {
      const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loggedInToken}`
        }
      })

      setUser(response.data)
    } else {

      throw 'no token'
    }

  }

  attemptLogin()
}, [token])


return (
  <>
    <h1 id="app-title"><Link to='/'>Classics</Link></h1>
    <Navigations user={user} />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/successReg' element={<SuccessRegi />} />
      <Route path='/books' element={<Books bookList={bookList} />} />
      <Route path='/books/:id' element={<SingleBook bookList={bookList} />} />
      <Route path='/login' element={<Login setUser={setUser} setToken={setToken} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/account' element={<Account user={user} setUser={setUser} setToken={setToken} />} />
      <Route path='/aboutus' element={<AboutUs />} />
    </Routes>
    <Footer className="footer" user={user} />


  </>
)
}

export default App
