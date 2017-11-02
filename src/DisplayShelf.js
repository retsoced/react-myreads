import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShowShelf extends Component {

  render() {
	const { shelfName, shelfTitle, shelfList } = this.props
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
      		{shelfName == 'currentlyReading' (
      		<i className="fa fa-book"></i>
      		)}
			{shelfName == 'wantToRead' (
      		<i className="fa fa-bookmark-o"></i>
      		)}
			{shelfName == 'haveRead' (
      		<i className="fa fa-check-square-o"></i>
      		)}
			{{ shelfTitle }}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfList.map((book) => (
                <li key={book.id}>
                  <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading" selected >Currently Reading</option>
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
    )
  }
}