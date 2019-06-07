import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const Layout = props => {
  return (
    <div className='site-wrap'>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link rel='shortcut icon' href='img/fav.png' />
        <meta name='author' content='codebrik' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta charset='UTF-8' />
        <title>Africa 80</title>
        <link
          href='https://fonts.googleapis.com/css?family=Lora:400,700|Roboto:300,400'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='static/css/font-awesome.min.css' />
        <link rel='stylesheet' href='static/css/themify-icons.css' />
        <link rel='stylesheet' href='static/css/bootstrap.css' />
        <link rel='stylesheet' href='static/css/owl.carousel.css' />
        <link rel='stylesheet' href='static/css/magnific-popup.css' />
        <link rel='stylesheet' href='static/css/nice-select.css' />
        <link rel='stylesheet' href='static/css/main.css' />
      </Head>
      <Header />
      {props.children}
      <Footer />

      <script src='js/vendor/jquery-2.2.4.min.js' />
      {/* <script
        src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js'
        integrity='sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4'
        crossorigin='anonymous'
      /> */}
      <script src='js/vendor/bootstrap.min.js' />
      <script src='js/jquery.ajaxchimp.min.js' />
      <script src='js/parallax.min.js' />
      <script src='js/owl.carousel.min.js' />
      <script src='js/isotope.pkgd.min.js' />
      <script src='js/jquery.nice-select.min.js' />
      <script src='js/jquery.magnific-popup.min.js' />
      <script src='js/countdown.js' />
      <script src='js/jquery.sticky.js' />
      <script src='js/main.js' />
    </div>
  );
};

export default Layout;
