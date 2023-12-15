import { useState } from "react"

const SearchBar = (books) => {
    const [ searchTerm, setSearchTerm ] = useState('')

    const filteredTerms = books.filter((book) => {
        return book.title.indexOf(searchTerm) !== -1
    })

return (
    <div>
        <h3>Serach for a book:</h3>
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
                <h3> Viewing {filteredTerms.length} or {books.length} </h3>
                <ul>
                    {
                        filteredTerms.map((book) => {
                            return <li key={book.id}> {book.title} </li>
                        })
                    }
                </ul>
            </div>

            : null
            
        }
    </div>
)

}