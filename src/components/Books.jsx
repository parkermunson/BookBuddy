import { Link } from 'react-router-dom'



const Books = ({bookList}) => {
    console.log(bookList)
    return(
        <div>

            <h1>Books</h1>
            <ul>
                {
                    bookList.map((book) => {
                        return (
                            <li>
                            <Link to={`/books/${book.id}`} key={book.id}>
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