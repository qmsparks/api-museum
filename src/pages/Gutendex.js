import { useState, useEffect } from 'react';
import axios from 'axios';

import BooksContainer from '../components/Gutendex/BooksContainer';

const Gutendex = () => {
const [books, setBooks] = useState([]);

useEffect(() => {
  axios.get('https://gutendex.com/books')
    .then(response => {
      console.log(response.data.results);
      setBooks(response.data.results);
    })
    .catch(err => {
      console.log(err);
    })
}, [])

return(
  <div className="gutendex">
    <h1>Gutendex Page</h1>
    <BooksContainer books={books} />
  </div>
)

}

export default Gutendex;