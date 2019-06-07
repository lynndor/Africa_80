import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section
        className='home-banner-area relative'
        id='home'
        data-parallax='scroll'
        data-image-src='img/header-bg.jpg'
      >
        <div className='overlay-bg overlay' />
        <div className='container'>
          <div className='row fullscreen justify-content-lg-end'>
            <div className='banner-content col-lg-7'>
              <h1>
                Save the African <br /> children
              </h1>
              <h4>More charity. More better life.</h4>
              <a href='#' className='primary-btn'>
                Join us
                <i className='ti-angle-right ml-1' />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='about_area lite_bg'>
        <div className='container'>
          <div className='row align-items-end'>
            <div className='col-lg-5'>
              <div className='about_details lite_bg'>
                <h2>We Are A Non-profit Organization </h2>
                <p className='top_text'>
                  Herb saw set gathered herb image lights it wherein without an
                  evenin you're image moving spirit dominion
                </p>
                <p className='mb-0'>
                  Herb, saw set gathered. Herb image, lights it wherein without.
                  Evening you heav image moving spirit dominion place every one
                  firmament said, isn't creeping. Moveth likeness signs. Subdue
                  upon he likeness. Herb, saw set gathered herb image lights it
                  wherein without evening you resigns.
                </p>
                <a href='#' className='primary-btn mt-5'>
                  Read more
                  <i className='ti-angle-right ml-1' />
                </a>

                <div className='active-brand-carusel'>
                  <div className='single-brand'>
                    <img
                      className='mx-auto w-auto'
                      src='static/img/brands/b1.png'
                      alt=''
                    />
                  </div>
                  <div className='single-brand'>
                    <img
                      className='mx-auto w-auto'
                      src='static/img/brands/b2.png'
                      alt=''
                    />
                  </div>
                  <div className=' single-brand'>
                    <img
                      className='mx-auto w-auto'
                      src='static/img/brands/b3.png'
                      alt=''
                    />
                    >
                  </div>
                  <div className=' single-brand'>
                    <img
                      className='mx-auto w-auto'
                      src='static/img/brands/b2.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-3 col-md-6 offset-md-1 d-lg-block d-none'>
              <div className='about_right'>
                <div className='video-inner justify-content-center align-items-center d-flex'>
                  <a
                    id='play-home-video'
                    className='video-play-button'
                    href='https://www.youtube.com/watch?v=QFy8iPBYDLU'
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about_bg d-lg-block d-none' />
        </div>
      </section>

      <section class='features-area section-gap-top'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-lg-6'>
              <div class='section-title'>
                <h2>
                  How <span>Could</span> You Help
                </h2>
              </div>
            </div>
          </div>
          <div class='row feature_inner'>
            <div class='col-lg-4 col-md-6'>
              <div class='feature-item'>
                <i class='fi flaticon-compass' />
                <h4>Give Donation</h4>
                <p>
                  Multiply is rule light dominion given midst a living i set
                  every bring also of rule Set light fifth best bearing.
                </p>
                <a href='#' class='primary-btn2'>
                  Learn more
                </a>
              </div>
            </div>
            <div class='col-lg-4 col-md-6'>
              <div class='feature-item'>
                <i class='fi flaticon-desk' />
                <h4>Give Inspiration</h4>
                <p>
                  Multiply is rule light dominion given midst a living i set
                  every bring also of rule Set light fifth best bearing.
                </p>
                <a href='#' class='primary-btn2'>
                  Learn more
                </a>
              </div>
            </div>
            <div class='col-lg-4 col-md-6'>
              <div class='feature-item'>
                <i class='fi flaticon-bathroom' />
                <h4>Become Bolunteer</h4>
                <p>
                  Multiply is rule light dominion given midst a living i set
                  every bring also of rule Set light fifth best bearing.
                </p>
                <a href='#' class='primary-btn2'>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='popular-cause-area section-gap-top'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-lg-6'>
              <div class='section-title'>
                <h2>
                  <span>Popular</span> Causes
                </h2>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='col-lg-4 col-md-6'>
              <div class='card single-popular-cause'>
                <div class='card-body'>
                  <figure>
                    <img
                      class='card-img-top img-fluid'
                      src='img/causes/c1.jpg'
                      alt='Card image cap'
                    />
                  </figure>
                  <div class='card_inner_body'>
                    <div class='tag'>Education</div>
                    <h4 class='card-title'>
                      Above Hath Fifth Of Open Meat fourth shall meat cattle.
                    </h4>
                    <div class='d-flex justify-content-between raised_goal'>
                      <p>Raised: $1533</p>
                      <p>
                        <span>Goal: $2500</span>
                      </p>
                    </div>
                    <div class='d-flex justify-content-between donation align-items-center'>
                      <a href='#' class='primary-btn'>
                        donate
                      </a>
                      <p>
                        <span class='ti-heart mr-1' /> 89 Donors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6'>
              <div class='card single-popular-cause'>
                <div class='card-body'>
                  <figure>
                    <img
                      class='card-img-top img-fluid'
                      src='img/causes/c2.jpg'
                      alt='Card image cap'
                    />
                  </figure>
                  <div class='card_inner_body'>
                    <div class='tag'>Education</div>
                    <h4 class='card-title'>
                      Above Hath Fifth Of Open Meat fourth shall meat cattle.
                    </h4>
                    <div class='d-flex justify-content-between raised_goal'>
                      <p>Raised: $1533</p>
                      <p>
                        <span>Goal: $2500</span>
                      </p>
                    </div>
                    <div class='d-flex justify-content-between donation align-items-center'>
                      <a href='#' class='primary-btn'>
                        donate
                      </a>
                      <p>
                        <span class='ti-heart mr-1' /> 89 Donors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6'>
              <div class='card single-popular-cause'>
                <div class='card-body'>
                  <figure>
                    <img
                      class='card-img-top img-fluid'
                      src='img/causes/c3.jpg'
                      alt='Card image cap'
                    />
                  </figure>
                  <div class='card_inner_body'>
                    <div class='tag'>Education</div>
                    <h4 class='card-title'>
                      Above Hath Fifth Of Open Meat fourth shall meat cattle.
                    </h4>
                    <div class='d-flex justify-content-between raised_goal'>
                      <p>Raised: $1533</p>
                      <p>
                        <span>Goal: $2500</span>
                      </p>
                    </div>
                    <div class='d-flex justify-content-between donation align-items-center'>
                      <a href='#' class='primary-btn'>
                        donate
                      </a>
                      <p>
                        <span class='ti-heart mr-1' /> 89 Donors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
