import { Link } from 'react-router-dom'



const Books = ({bookList}) => {
    return(
        <div>

            <h1>Books</h1>
            <ul>
                {
                    bookList.map((book) => {
                        return (
                            <li key={book.id}>
                            <Link to={`/books/${book.id}`}>
                            {book.title}
                            </Link>
                            </li>

                            
                        )
                    })
                }
            </ul>
        
        </div>
    )
}

export default Books