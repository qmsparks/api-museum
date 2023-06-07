import BookDetails from "./BookDetails"

const BooksContainer = props => {

  const displayBooks = () => {
    return props.books.map(book => {
      return <BookDetails book={book} key={book.id} />
    })
  }

  return(
    <div className="books-container">
      <h2>Books Go Here</h2>
      {displayBooks()}
    </div>
  )

}

export default BooksContainer;