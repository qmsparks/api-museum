const BookDetails = ({book}) => {

  //TODO return to this to properly handle translating multiple authors to functional UI
  const authorCredit = () => {
    const { authors } = book;
    return authors.map((author, i) => {
      return <span key={i}>{author.name}</span>
    })
  }

  return(
    <div className="book">
      <h3>{book.title}</h3>
      <p>By {authorCredit()}</p>
    </div>
  )
}

export default BookDetails;