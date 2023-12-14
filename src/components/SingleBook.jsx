import { useParams, Link } from 'react-router-dom'

const SingleBook = ({bookList}) => {
    const params = useParams()
    const id = params.id*1

    const book = bookList.find((book) => {
        return book.id === id
    })

    if(!book){
        return null
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <img src={book.coverimage}/>
            <p>{book.description}</p>
            <button>
                <Link to='/books'>Back to all Books</Link>
            </button>
        </div>
    )

}

export default SingleBook