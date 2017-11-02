import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {
	state = {
    query: '',
    books: []
  }

  componentDidMount(){
    BooksAPI.search('a').then((results) => {
      this.setState({ books: results })
    })
  }

  updateQuery = (query) => {
    console.log(query)
    console.log( BooksAPI.search(JSON.stringify(query)) );

    BooksAPI.search(query).then((results) => {
      this.setState({ books: results })
    })

    this.setState({ query: query })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  listCategory = (name) => {
    BooksAPI.search('name').then((results) => {
      this.setState({ books: results })
    })
  }

  addToShelf (evt) {
    console.log(evt.target.id);
  }

  render() {
    const { books } = this.state
    const { query } = this.state
    var categories = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh']
    
  return (
    <div>
      <div className="search-books-bar">
        <div className='pageview'>
          <Link 
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              className='search-books'
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="search-books-results">
        <div className="pageview">
          <h2 className="bookshelf-title"><i className="fa fa-search"></i> Results</h2>
          <ol className="books-grid">

              {books.map((book) => (
                <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
                      <div className="book-shelf-changer">
                      <select id={book.id} onChange={this.addToShelf} defaultValue='none'>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
                </li>
              ))}

          </ol>
        </div>
      </div>
    </div>
    )
  }
}

export default AddBook
