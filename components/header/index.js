import Link from "next/link";

const Header = () => {
  return (
    <div className="site-navbar js-sticky-header site-navbar-target">
      <div className="container">

        <div className="row align-items-center position-relative">
          <div className="site-logo">

            <Link href="/" prefetch >
              <a className="text-black">
                <span className="text-primary">Africa 80</span>
              </a>
            </Link>

          </div>

          <div className="site-navigation text-center ml-auto">
            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
              <li>
                <Link href="/" prefetch >
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/OurStoryPage" as="our-story">
                  <a className="nav-link">Our Story</a>
                </Link>
              </li>
              <li>
                <Link href="/AdvisoryBoardPage" as="board">
                <a className="nav-link">Advisory Board</a>
                </Link>
              </li>
              <li>
                <Link href="/NetworksPage" as="networks">
                <a className="nav-link">Africa80 Networks</a>
                </Link>
              </li>
              <li>
                <Link href="/EventsPage" as="events">
                <a className="nav-link">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/MediaPage" as="news-and-media">
                <a className="nav-link">News and Media</a>
                </Link>
              </li>
              <li>
                <Link href="/ContactPage" as="contact-us">
                <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/Donate" as="donate">
                <a className="nav-link">Donate</a></Link>
              </li> 
            </ul>
   
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Header