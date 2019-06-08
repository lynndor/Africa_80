import Layout from "../components/Layout";
import Story from "../components/ourstory/index";
import Mini from '../components/header/mini_slider';

const OurStoryPage = () => {


   return (
     
       <Layout>
    < Mini /> 
       <section class='about_area lite_bg'>
        <div class='container'>
         <div class='row align-items-end'>
          <div class='col-lg-5'>
          <div class='about_details lite_bg'>
             <h2>We Are A Non-profit Organization </h2>
                <p class='top_text'>
                  Herb saw set gathered herb image lights it wherein without an
                  evenin you're image moving spirit dominion
                </p>
                <p class='mb-0'>
                  Herb, saw set gathered. Herb image, lights it wherein without.
                  Evening you heav image moving spirit dominion place every one
                  firmament said, isn't creeping. Moveth likeness signs. Subdue
                  upon he likeness. Herb, saw set gathered herb image lights it
                  wherein without evening you resigns.
                </p>
                <a href='#' class='primary-btn mt-5'>
                  Read more
                  <i class='ti-angle-right ml-1' />
                </a>

                <div class='active-brand-carusel'>
                  <div class='single-brand'>
                    <img
                      class='mx-auto w-auto'
                      src='img/brands/b1.png'
                      alt=''
                    />
                    >
                  </div>
                  <div class='single-brand'>
                    <img
                      class='mx-auto w-auto'
                      src='img/brands/b2.png'
                      alt=''
                    />
                  </div>
                  <div class=' single-brand'>
                    <img
                      class='mx-auto w-auto'
                      src='img/brands/b3.png'
                      alt=''
                    />
                  </div>
                  <div class=' single-brand'>
                    <img
                      class='mx-auto w-auto'
                      src='img/brands/b2.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 offset-lg-3 col-md-6 offset-md-1 d-lg-block d-none'>
              <div class='about_right'>
                <div class='video-inner justify-content-center align-items-center d-flex'>
                  <a
                    id='play-home-video'
                    class='video-play-button'
                    href='https://www.youtube.com/watch?v=QFy8iPBYDLU'
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class='about_bg d-lg-block d-none' />
        </div>
      </section>
    </Layout>
  );
};

export default OurStoryPage;
