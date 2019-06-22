import Link from "next/link";

const Navi = () => {
  return (
    <ul className='navbar-nav'>
      <li>
        <Link href='/'>
          <a> Home </a>
        </Link>
      </li>
      <li>
        <Link href='/OurStoryPage'>
          <a>Our Story</a>
        </Link>
      </li>
      <li>
        <Link href='/AdvisoryBoardPage'>
          <a>Advisory Board</a>
        </Link>
      </li>
      <li>
        <Link href='/EventsPage'>
          <a>Events</a>
        </Link>
      </li>
      <li>
        <Link href='/MediaPage'>
          <a>News &#38; Media</a>
        </Link>
      </li>

      <li>
        <Link href='/ContactPage'>
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href='/Donate'>
          <a>Donate</a>
        </Link>
      </li>

      <style jsx>{`
        a {
          color: #000;
          font-weight: 550;
          transition: all 0.3s ease-out;
        }

        li:nth-child(1n)a:hover {
          color: #fff;
          background: #89911a;
        }
        li:nth-child(2n)a:hover {
          color: #fff;
          background: #284496;
        }
        li:nth-child(3n)a:hover {
          color: #fff;
          background: #b31200;
        }
        li:nth-child(4n)a:hover {
          color: #fff;
          background: #ffc107;
        }
        li:nth-child(5n)a:hover {
          color: #fff;
          background: #91511a;
        }
        li:nth-child(6n)a:hover {
          color: #fff;
          background: #91511a;
        }
      `}</style>
    </ul>
  );
};

export default Navi;
