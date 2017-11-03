import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AddBook from './AddBook'
import ListBooks from './ListBooks'
import './css/App.css'
import './css/font-awesome.min.css'
import Header from './Header'
import Footer from './Footer'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    query: '',
    currentShelf: [
        {"id": "111","title": "Development as Freedom", "authors": ["Amartya Sen"], "imageLinks": {"smallThumbnail": "http://books.google.com/books/content?id=XmfIeDy_taYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=XmfIeDy_taYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
        },
        {"id": "222", "title": "On Photography", "authors": [ "Susan Sontag" ], "imageLinks": { "smallThumbnail": "http://books.google.com/books/content?id=_lN7UtRmsQwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=_lN7UtRmsQwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" }
        }
      ],
    nextShelf: [
    	{"id": "333", "title": "1776", "authors": ["David McCullough"], "imageLinks": {"smallThumbnail": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"}
        },
        {"id": "444", "title": "Harry Potter and the Sorcerer's Stome", "authors": ["J.K. Rowling"], "imageLinks": {"smallThumbnail": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"}
        }
    ],
    readShelf: [
    	{"id": "555", "title": "The Hobbit", "authors": ["J.R.R. Tolkien"], "imageLinks": {"smallThumbnail": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"}
        },
        {"id": "666", "title": "Oh, the Places You'll Go", "authors": ["Seuss"], "imageLinks": {"smallThumbnail": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api","thumbnail": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"}
        },
      {"id": "777", "title": "The Adventures of Tom Sawyer", "authors": ["Mark Twain"], "imageLinks": { "smallThumbnail": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"}
        }
    ]
  }

  changeShelf (e, book) {
    console.log(book.id);
    console.log(e);
    if (e === 'currentlyReading') {

    } else if (e === 'wantToRead') {

    } else if (e === 'read') {

    } else if (e === 'none') {
      console.log('delete:' + book);
    }
  }

  render() {
    const { currentShelf } = this.state
    const { nextShelf } = this.state
    const { readShelf } = this.state

    return (
      <div className="app">
       <Header />
       <section className="search-books">
          <Route path='/add' render={({ history }) => (
              <AddBook/>
          )}/>
          
		    </section>
       		<Route exact path='/' render={() => (
          		<ListBooks 
      				currentlyReading={currentShelf}
      				wantToRead={nextShelf}
              haveRead={readShelf}
              onShelfChange={this.changeShelf}
              onDeleteBook={this.removeFromShelf}
      			/>
        	)}/>
		<Footer />
      </div>
    )
  }
}

export default BooksApp
