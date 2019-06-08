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
                <Link href='/'>
                  <a className='active'> Home </a>
                </Link>
              </li>
              <li>
                    <Link href='/OurStoryPage'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='causes.html'>
                  <a>Causes</a>
                </Link>
          </li>
              <li>
                <Link href='event.html'>
                  <a>Event</a>
                </Link>
      </li>

              <li>
        <Link href='/ContactPage'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>  
        </div>    
      </nav>        
    </header > 
    );      
};    
    
  export default Header;
