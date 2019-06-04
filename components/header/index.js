import Link from "next/link";

const Header = () => {
  return (
    <div className="nav-container">
      <Link href="/index" as="home"> Home </Link>
      <Link href="/OurStoryPage" as="our-story">Our Story</Link>
      <Link href="/EventsPage" as="events"> Events </Link>
      <Link href="/Donate" as="our-story">Donate</Link>
      <Link href="/MediaPage" as="our-story">Media</Link>
    </div>
  )
}

export default Header