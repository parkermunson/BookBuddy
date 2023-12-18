import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'



const Books = ({bookList}) => {
    return(
        <div className="books-container">

            <h1>Library</h1>
            <p id="textbox">Scroll to browse our selection of classic literature,<br/> or use the search bar if you know what you're looking for.</p>
            <SearchBar bookList={bookList} />
            <ul className="books-list">
                {
                    bookList.map((book) => {
                        return (
                            <li key={book.id} className="book-item">
                            <Link to={`/books/${book.id}`} className="book-link">
                            <img src={book.coverimage} className="book-cover"/>
                            <h3 className='book-title'>{book.title} |</h3>
                            <br />
                            <p>{book.author}</p>
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