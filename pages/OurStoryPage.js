import Layout from "../components/Layout";
import ImageSlider from "../components/image_slider/";
const OurStoryPage = () => {
  return (
    <Layout>
      <ImageSlider />
      <section className="about_area lite_bg">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="about_details lite_bg">
                <h2>We Are A Non-profit Organization </h2>
                <p className="top_text">
                  Herb saw set gathered herb image lights it wherein without an
                  evenin you're image moving spirit dominion
                </p>
                <p className="mb-0">
                  Herb, saw set gathered. Herb image, lights it wherein without.
                  Evening you heav image moving spirit dominion place every one
                  firmament said, isn't creeping. Moveth likeness signs. Subdue
                  upon he likeness. Herb, saw set gathered herb image lights it
                  wherein without evening you resigns.
                </p>
                <a href="#" className="primary-btn mt-5">
                  Read more
                  <i className="ti-angle-right ml-1" />
                </a>

                <div className="active-brand-carusel">
                  <div className="single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="img/brands/b1.png"
                      alt=""
                    />
                    >
                  </div>
                  <div className="single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="img/brands/b2.png"
                      alt=""
                    />
                  </div>
                  <div className=" single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="img/brands/b3.png"
                      alt=""
                    />
                  </div>
                  <div className=" single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="img/brands/b2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-3 col-md-6 offset-md-1 d-lg-block d-none">
              <div className="about_right">
                <div className="video-inner justify-content-center align-items-center d-flex">
                  <a
                    id="play-home-video"
                    className="video-play-button"
                    href="https://www.youtube.com/watch?v=QFy8iPBYDLU"
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about_bg d-lg-block d-none" />
        </div>
      </section>
    </Layout>
  );
};

export default OurStoryPage;
