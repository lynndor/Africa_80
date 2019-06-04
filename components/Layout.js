import Header from './header';
import Footer from './footer';

const Layout = props => {
  return (
    <div className="container">
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout