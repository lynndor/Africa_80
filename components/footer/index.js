const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-area'>
        <div className='container'>
          <div className='row section_gap'>
            <div className='col-lg-5 col-md-6 col-sm-6'>
              <div className='single-footer-widget tp_widgets'>
                <h4 className='footer_title large_title'>About Us</h4>
                <p>
                  Do you want to be even more successful? Learn to love learning
                  and growth. The more effort you put into improving your
                  skills, the bigger the payoff you will get. Realize that
                  things will be hard at first, but the rewards will be worth
                  it.
                </p>
                <p>
                  Copyright &copy;
                  {document.write(new Date().getFullYear())}; All rights
                  reserved | This template is made with{" "}
                  <i className='fa fa-heart-o' aria-hidden='true' /> by{" "}
                  <a href='https://colorlib.com' target='_blank'>
                    CodeBrik
                  </a>
                </p>
              </div>
            </div>
            <div className='offset-lg-1 col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget tp_widgets'>
                <h4 className='footer_title'>Quick Links</h4>
                <ul className='list'>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Shop</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Product</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='offset-lg-1 col-lg-3 col-md-6 col-sm-6'>
              <div className='single-footer-widget tp_widgets'>
                <h4 className='footer_title'>Contact Us</h4>
                <div className='ml-5'>
                  <p className='sm-head'>
                    <span className='fa fa-location-arrow' />
                    Head Office
                  </p>
                  <p>123, Main Street, Your City</p>

                  <p className='sm-head'>
                    <span className='fa fa-phone' />
                    Phone Number
                  </p>
                  <p>+123 456 7890</p>

                  <p className='sm-head'>
                    <span className='fa fa-envelope' />
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
