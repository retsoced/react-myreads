import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ListBooks extends Component {
	static propTypes = {
      currentlyReading: PropTypes.array.isRequired,
      wantToRead: PropTypes.array.isRequired,
      haveRead: PropTypes.array.isRequired,
      onShelfChange: PropTypes.func.isRequired,
      onDeleteBook: PropTypes.func.isRequired
    }

  	render () {
		  const { currentlyReading, wantToRead, haveRead, onShelfChange, onDeleteBook } = this.props
        
    	return (
        	<div className="list-books">
            <div className="list-books-content">
              <div className="pageview">
          
							<section className="bookshelf">
								<h2 className="bookshelf-title"><i className="fa fa-book"></i> Currently Reading</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{currentlyReading.map((book) => (
												<li key={book.id}>
													<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
													<div className="book-shelf-changer">
														<select id={book.id} onChange={(e) => onShelfChange(e.target.value, book)} defaultValue='currentlyReading'>
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
							</section>
          
							<section className="bookshelf">
								<h2 className="bookshelf-title"><i className="fa fa-bookmark-o"></i> Want to Read</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{wantToRead.map((book) => (
												<li key={book.id}>
													<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
													<div className="book-shelf-changer">
														<select id={book.id} onChange={() => onShelfChange(book)} defaultValue='wantToRead'>
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
							</section>

							<section className="bookshelf">
								<h2 className="bookshelf-title"><i className="fa fa-check-square-o"></i> Read</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{haveRead.map((book) => (
												<li key={book.id}>
													<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
													<div className="book-shelf-changer">
														<select onChange={() => onShelfChange(book)} defaultValue='read'>
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
							</section>
          
              </div>
            </div>
          </div>
        ) 
    }
}

export default ListBooks
