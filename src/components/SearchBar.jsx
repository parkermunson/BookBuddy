import { useState } from "react"
import { Link } from 'react-router-dom'

const SearchBar = ({bookList}) => {
    const [ searchTerm, setSearchTerm ] = useState('')

    const filteredTerms = bookList.filter((book) => {
        return book.title.indexOf(searchTerm) !== -1
    })

return (
    <div>
        <h3>Search for a book:</h3>
        <label>
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => {setSearchTerm(event.target.value)}}
                />
        </label>
        {
            searchTerm.length > 0 ?
            <div>
                <h3> Viewing {filteredTerms.length} of {bookList.length} </h3>
                <ul>
                    {
                        filteredTerms.map((book) => {
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

            : null

        }
    </div>
)

}

export default SearchBar