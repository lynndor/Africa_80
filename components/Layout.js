import Header from './header';
import Footer from './footer';
import Head from 'next/head';

const Layout = props => {
  return (
    <div className="site-wrap">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />>

         <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Roboto:300,400" rel="stylesheet" />>

          <link rel="stylesheet" href="static/css/font-awesome.min.css" />
        <link rel="stylesheet" href="static/css/themify-icons.css" />
        <link rel="stylesheet" href="static/css/bootstrap.css" />
        <link rel="stylesheet" href="static/css/owl.carousel.css" />
        <link rel="stylesheet" href="static/css/magnific-popup.css" />
        <link rel="stylesheet" href="static/css/nice-select.css" />
        <link rel="stylesheet" href="static/css/main.css" />
      </Head>

      <Header />
      {props.children}
      <Footer />


      <script src="static/js/vendor/jquery-2.2.4.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
        crossorigin="anonymous"></script>
      <script src="static/js/vendor/bootstrap.min.js"></script>
      <script src="static/js/jquery.ajaxchimp.min.js"></script>
      <script src="static/js/parallax.min.js"></script>
      <script src="static/js/owl.carousel.min.js"></script>
      <script src="static/js/isotope.pkgd.min.js"></script>
      <script src="static/js/jquery.nice-select.min.js"></script>
      <script src="static/js/jquery.magnific-popup.min.js"></script>
      <script src="static/js/countdown.js"></script>
      <script src="static/js/jquery.sticky.js"></script>
      <script src="static/js/main.js"></script>
    </div>
  )
}

export default Layout