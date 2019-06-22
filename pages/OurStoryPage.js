import { useState } from "react";
import Layout from "../components/Layout";
import ImageSlider from "../components/image_slider/";

const OurStoryPage = () => {
  const [overlay_content, setContent] = useState({
    photo: "/static/img/collab_2.jpg",
    quote: "Individually we are one drop. Together, we are an ocean.",
    author: "Ryunosuke Satoro "
  });
  return (
    <Layout>
      <ImageSlider data={overlay_content} />
      <section className='about_area lite_bg'>
        <div className='container'>
          <div className='row align-items-end'>
            <div className='col-lg-5'>
              <div className='about_details lite_bg'>
                <h2>
                  Our <span>Story</span>
                </h2>
                <p className='mb-0'>
                  In 2015 during the World Economic Forum on Africa meeting in
                  Cape Town South Africa, 80 young Africans from across 30
                  countries met and after having been inspired by the great
                  country representation decided to collaborate on a project
                  that would not only be lasting and educational, but would also
                  be a demonstration of the power of collaboration. The coming
                  together of the group and its intentions created such an
                  excitement across the continent where each one of the
                  co-authors had influence, that we managed to secure a Foreword
                  by Ashish Thakkar, widely known at the time as Africa’s
                  youngest billionaire.
                </p>
                <p>
                  A year later on the 25th May 2016 the book was officially
                  launched! During this memorable event, we received support
                  from the South African Government, multiple media platforms,
                  and other stakeholders.
                </p>
                This very event marked the birthing of the Africa80 network.
                Fast forward to today, The Africa80 has managed to not only
                continue advocating collaboration as a tool to transforming our
                economies for the better, but we have cultivated and in other
                cases created partnerships that are key to the success of the
                network through the amplification of network member voices.
                <p>
                  <br /> Although we consider our network as continuously
                  growing and evolving, we remain committed to playing our part
                  in improving the state of Africa by using our skill,
                  resources, and network to preach and act collaboration.
                </p>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-3 col-md-6 offset-md-1 d-lg-block d-none'>
              <div className='about_right'>
                {/* <div className='video-inner justify-content-center align-items-center d-flex'>
                  <a
                    id='play-home-video'
                    className='video-play-button'
                    href='https://www.youtube.com/watch?v=QFy8iPBYDLU'
                  >
                    <span />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className='about_bg d-lg-block d-none' />
        </div>
        <style jsx>{`
          .about_bg {
            background: #0e2b04;
            max-height: calc(100% - 5em);
          }
          .about_right {
            background: url(/static/img/collab_1.jpg) no-repeat center;
            background-size: cover;
            z-index: 1;
            position: relative;
            bottom: 360px;
            right: auto;
            width: 674px;
            left: -205px;
            top: auto;
            border-radius: 0px;
            box-shadow: 10px 10px 11px rgba(0, 0, 0, 0.2);
            border-top: 30px solid #fff;
          }
          .about_details h2 span {
            color: #001b09;
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default OurStoryPage;
