import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="top-footer">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-2 col-md-6">
                          <ul className="list-unstyled">
                              <li><a href="#">News</a></li>
                              <li><a href="#">Events</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">FAQs</a></li>
                          </ul>
                      </div>

                      <div className="col-lg-2 col-md-6">
                          <ul className="list-unstyled">
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Contact Us</a></li>
                              <li><a href="#">Complains</a></li>
                          </ul>
                      </div>

                      <div className="col-lg-6 col-md-6">
                          <form>
                              <div className="form-group">
                                  <label>Subscribe to Newsletter</label>
                                  <input type="text" className="form-control" placeholder="Email Address" />
                                  <button type="button" className="btn btn-light">Subscribe</button>
                              </div>
                          </form>
                      </div>

                       <div className="col-lg-2 col-md-6">
                           <h3>
                               Follow us on
                           </h3>
                          <ul className="list-unstyled soical">
                              <li><a href="#"><img src={process.env.PUBLIC_URL + "/assets/images/surface1.png"} alt="instagram" /></a></li>
                              <li><a href="#"><img src={process.env.PUBLIC_URL + "/assets/images/Component 39 – 1.png"} alt="youtube" /></a></li>
                              <li><a href="#"><img src={process.env.PUBLIC_URL + "/assets/images/Component 40 – 1.png"} alt="linkedin" /></a></li>
                              <li><a href="#"><img src={process.env.PUBLIC_URL + "/assets/images/Component 41 – 1.png"} alt="facebook" /></a></li>
                              <li><a href="#"><img src={process.env.PUBLIC_URL + "/assets/images/Component 42 – 1.png"} alt="tiwwter" /></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-bottom">
              All rights reserved - Link Development Company © 2020
          </div>
        </footer>
    )
}

export default Footer;