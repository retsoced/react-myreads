import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <header className="site-header">
        <div className="pageview">
          <img src='book-logo.png' className='site-logo' alt='logo' width='60' />
          <h1>Ready, set, read!</h1>
        </div>
        <nav>
          <div className="pageview">

            <Route exact path='/' render={({ history }) => (
                <Link 
                  to="/add"
                  className="link"
                ><i className="fa fa-plus"></i> Add Books</Link>
            )}/>

            <Route path='/add' render={({ history }) => (
                <Link 
                  to="/add"
                  className="link hide"
                ><i className="fa fa-plus"></i> Add Books</Link>
            )}/>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
