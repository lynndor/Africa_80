import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const Layout = props => {
  return (
    <div className='site-wrap'>
      <Head>
        <meta charset='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>

      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
