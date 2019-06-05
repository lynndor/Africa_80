import Header from './header';
import Footer from './footer';
import Head from 'next/head';

const Layout = props => {
  return (
    <div className="site-wrap">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />>

        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700|Anton" rel="stylesheet" />


        <link rel="stylesheet" href="static/fonts/icomoon/style.css" />

        <link rel="stylesheet" href="static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="static/css/magnific-popup.css" />
        <link rel="stylesheet" href="static/css/jquery-ui.css" />
        <link rel="stylesheet" href="static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="static/css/owl.theme.default.min.css" />

        <link rel="stylesheet" href="static/css/bootstrap-datepicker.css" />

        <link rel="stylesheet" href="static/fonts/flaticon/font/flaticon.css" />

        <link rel="stylesheet" href="static/css/aos.css" />

        <link rel="stylesheet" href="static/css/style.css" />
      </Head>

      <Header />
      {props.children}
      <Footer />


      <script src="static/js/jquery-3.3.1.min.js"></script>
      <script src="static/js/jquery-ui.js"></script>
      <script src="static/js/popper.min.js"></script>
      <script src="static/js/bootstrap.min.js"></script>
      <script src="static/js/owl.carousel.min.js"></script>
      <script src="static/js/jquery.magnific-popup.min.js"></script>
      <script src="static/js/jquery.sticky.js"></script>
      <script src="static/js/jquery.waypoints.min.js"></script>
      <script src="static/js/jquery.animateNumber.min.js"></script>
      <script src="static/js/aos.js"></script>

      <script src="static/js/main.js"></script>
    </div>
  )
}

export default Layout