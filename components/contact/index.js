const Form = () => {

    return (
        <div className="site-section bg-light" id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="text-black section-title text-uppercase">Contact Us</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 mb-5">
                        <form action="#" method="post">
                            <div className="form-group row">
                                <div className="col-md-6 mb-4 mb-lg-0">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-12">
                                    <input type="text" className="form-control" placeholder="Email address" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea name="" id="" className="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 ml-auto">
                                    <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default Form;