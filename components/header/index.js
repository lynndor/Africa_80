import Link from "next/link";

const Header = () => {
  return (
    <header className='default-header'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <img src='img/logo.png' alt='' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='fa fa-bars' />
          </button>

          <div
            className='collapse navbar-collapse justify-content-end align-items-center'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav'>
              <li>
                <a className='active' href='index.html'>
                  Home
                </a>
              </li>
              <li>
                <a href='about.html'>About</a>
              </li>
              <li>
                <a href='causes.html'>Causes</a>
              </li>
              <li>
                <a href='event.html'>Event</a>
              </li>
              <li className='dropdown'>
                <a
                  className='dropdown-toggle'
                  href='#'
                  id='navbardrop'
                  data-toggle='dropdown'
                >
                  Pages
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='event-details.html'>
                    Event Details
                  </a>
                  <a className='dropdown-item' href='elements.html'>
                    Elements
                  </a>
                </div>
              </li>
              <li className='dropdown'>
                <a
                  className='dropdown-toggle'
                  href='#'
                  id='navbardrop'
                  data-toggle='dropdown'
                >
                  Blog
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='blog.html'>
                    Blog
                  </a>
                  <a className='dropdown-item' href='blog-details.html'>
                    Blog Details
                  </a>
                </div>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
