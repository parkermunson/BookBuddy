import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SingleBook = ({ bookList }) => {
    const params = useParams()
    const bookId = params.id * 1

    const [isCheckedOut, setIsCheckedOut ] = useState(false)

    const book = bookList.find((book) => {
        return book.id === bookId
    })

    if (!book) {
        return null
    }

    const handleCheckout = async () => {
        const loggedInToken = window.localStorage.getItem('token')
        try {
            const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
                {
                    available: false,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${loggedInToken}`,
                    }
                }
            );
            setIsCheckedOut(true)
            console.log('Booked checked out successfully!')
        } catch (error) {
            console.log('An erorr occurred during checkout', error.message);
        }
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            {isCheckedOut ? (
                <p>Book Checked Out Successfully!</p>
            ) : (
                book.available === true && (
                    <button onClick={handleCheckout}>Check out Book</button>
                )
            )}
            <br />
            <br />
            <img src={book.coverimage} alt={`Cover of ${book.title}`} />
            <p>{book.description}</p>
            <button>
                <Link to='/books'>Back to all Books</Link>
            </button>
        </div>
    );
};

export default SingleBook;