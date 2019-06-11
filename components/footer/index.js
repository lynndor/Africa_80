import Navi from "../navigation";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-area">
        <div className="container">
          <div className="row section_gap">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget tp_widgets">
                <h4 className="footer_title large_title">About Us</h4>

                <p>
                  Copyright &copy;
                  {new Date().getFullYear()} All rights reserved | This website
                  is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" />
                  <a href="https://colorlib.com" target="_blank">
                    CodeBrik
                  </a>
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget tp_widgets">
                <h4 className="footer_title">Quick Links</h4>
                <Navi />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget tp_widgets">
                <h4 className="footer_title">Contact Us</h4>
                <div className="ml-5">
                  <p className="sm-head">
                    <span className="fa fa-location-arrow" />
                    Head Office
                  </p>
                  <p>123, Main Street, Your City</p>

                  <p className="sm-head">
                    <span className="fa fa-phone" />
                    Phone Number
                  </p>
                  <p>+123 456 7890</p>

                  <p className="sm-head">
                    <span className="fa fa-envelope" />
                    Email
                  </p>
                  <p>free@infoexample.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
