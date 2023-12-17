import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'



const Books = ({bookList}) => {
    return(
        <div>

            <h1>Books</h1>
            <SearchBar bookList={bookList} />
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