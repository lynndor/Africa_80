import { useState } from "react";
import Layout from "../components/Layout";
import ImageSlider from "../components/image_slider";
import DonateCard from "../components/donate";
import FeatureItem from "../components/feature";
// import DonateItem from "../components/Donate/donate_item";
import Help from "../components/help/help";
const Home = () => {
  // Dontate state
  const [donate_items, setDonateItems] = useState([
    {
      image: "/static/img/causes/c1.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    },
    {
      image: "/static/img/causes/c2.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    },
    {
      image: "/static/img/causes/c3.jpg",
      tag: "Education",
      card_title: "Above Hath Fifth Of Open Meat fourth shall meat cattle.",
      amount_raised: "Raised: $1533",
      goal_amount: "Goal: $2500",
      total_donors: 89
    }
  ]);

  // Feature State

  const [feature_items, setFeatures] = useState([
    {
      feature_icon: "fi flaticon-compass",
      title: "Give Donation",
      feature_content:
        "Multiply is rule light dominion given midst a living i set every bring also of rule Set light fifth best bearing."
    },
    {
      feature_icon: "fi flaticon-desk",
      title: "Give Inspiration",
      feature_content:
        "Multiply is rule light dominion given midst a living i set every bring also of rule Set light fifth best bearing."
    },
    {
      feature_icon: "fi flaticon-bathroom",
      title: "Become a Volunteer",
      feature_content:
        "Multiply is rule light dominion given midst a living i set every bring also of rule Set light fifth best bearing."
    }
  ]);
  return (
    <Layout>
      <section
        className="home-banner-area relative"
        id="home"
        data-parallax="scroll"
        data-image-src="/static/img/header-bg.jpg"
      >
        <div className="overlay-bg overlay" />
        <div className="container">
          <div className="row fullscreen justify-content-lg-end">
            <div className="banner-content col-lg-7">
              <h1>
                Save the African <br /> children
              </h1>
              <h4>More charity. More better life.</h4>
              <a href="#" className="primary-btn">
                Join us
                <i className="ti-angle-right ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
                      src="static/img/brands/b1.png"
                      alt=""
                    />
                  </div>
                  <div className="single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="static/img/brands/b2.png"
                      alt=""
                    />
                  </div>
                  <div className=" single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="static/img/brands/b3.png"
                      alt=""
                    />
                    >
                  </div>
                  <div className=" single-brand">
                    <img
                      className="mx-auto w-auto"
                      src="static/img/brands/b2.png"
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

      <section className='features-area section-gap-top'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h2>
                  How <span>Could</span> You Help
                </h2>
              </div>
            </div>
          </div>
          <div className='row feature_inner'>
            {feature_items.map((item, index) => (
              <FeatureItem item={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='popular-cause-area section-gap-top'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h2>
                  <span>Popular</span> Causes
                </h2>
              </div>
            </div>
          </div>

          <div className='row'>
            {donate_items.map((item, index) => (
              <DonateCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Help />
    </Layout>
  );
};

export default Home;
