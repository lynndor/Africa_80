import Link from "next/link";

const Navi = () => {
  return (
    <ul className="navbar-nav">
      <li>
        <Link href="/">
          <a> Home </a>
        </Link>
      </li>
      <li>
        <Link href="/OurStoryPage">
          <a>Our Story</a>
        </Link>
      </li>
      <li>
        <Link href="/AdvisoryBoardPage">
          <a>Advisory Board</a>
        </Link>
      </li>
      <li>
        <Link href="/EventsPage">
          <a>Events</a>
        </Link>
      </li>
      <li>
        <Link href="/MediaPage">
          <a>News &#38; Media</a>
        </Link>
      </li>

      <li>
        <Link href="/ContactPage">
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Donate">
          <a>Donate</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navi;
