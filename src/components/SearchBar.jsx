import { useState } from "react"
import { Link } from 'react-router-dom'

const SearchBar = ({ bookList }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTerms = bookList.filter((book) => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
        const authorMatch = book.author.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || authorMatch;
    })

    return (
        <div>
            <div className="search-bar">
                <h3>Search for a book:</h3>
                <label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => { setSearchTerm(event.target.value) }}
                    />
                </label>
            </div>
            {
                searchTerm.length > 0 ?
                    <div className="search-terms">
                        <h3> Viewing {filteredTerms.length} of {bookList.length} </h3>
                        <ul>
                            {
                                filteredTerms.map((book) => {
                                    return (
                                        <li className="search-term-list" key={book.id}>
                                            <Link to={`/books/${book.id}`}>
                                                <span>{book.title} by {book.author}</span>
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