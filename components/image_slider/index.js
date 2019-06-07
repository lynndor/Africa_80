const ImageSlider = () => {
  return (
    <section
      className='home-banner-area relative'
      id='home'
      data-parallax='scroll'
      data-image-src='static/img/header-bg.jpg'
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
  );
};

export default ImageSlider;
