import Link from "next/link";

const Header = () => {
  return (
    <div className="nav-container">
      <Link href="/" prefetch ><a>Home</a></Link>
      <Link href="/OurStoryPage" as="our-story"><a>Our Story</a></Link>
      <Link href="/EventsPage" as="events"><a>Events</a></Link>
      <Link href="/Donate" as="our-story"><a>Donate</a></Link>
      <Link href="/MediaPage" as="our-story"><a>Media</a></Link>
    </div>
  )
}

export default Header