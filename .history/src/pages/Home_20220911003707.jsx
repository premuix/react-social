import NavbarStr from '../components';
import Footer from './Footer';
import { motion } from "framer-motion";

const Home = () => {
  return (

    <>

      <main className="page-wrapper">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <NavbarStr />

          <section className="py-80">
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-8">
                  <div className="video-box position-relative text-center">
                    <div className="position-absolute top-0 start-0">
                      <div className="date-cal">
                        <h4>13</h4> <span>JAN</span>
                      </div>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle"><i className=" bi bi-play-circle-fill"></i>
                    </div>
                    <img className="img-fluid" src="/video.png" alt="Video" />
                  </div>
                  <div className="text-end py-3 fs-14 d-flex justify-content-end ">
                    <div>100 views</div>
                    <div className="ms-3">3 min read</div>
                  </div>

                  <section className="mt-3 mb-4">
                    <p className="lead text-uppercase pt-2">Blog Catagory Main </p>
                    <h2 className="fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua</h2>
                  </section>

                  <section className="d-flex justify-content-start align-items-center mb-4 ">
                    <div className="text-round-bg bg-dark">L</div>
                    <div className="ms-3">
                      <h5 className="h-mb-0">Lorem ipsum</h5>
                    </div>
                  </section>

                  <section className="mb-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                  <section className="mb-4">
                    <h4 className="text-uppercase h-mb-0">Lorem ipsum</h4>
                  </section>
                  <section className="mb-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>

                  <section className="comment-section">
                    <div className="like-comment text-uppercase d-flex justify-content-end align-items-center mb-4">
                      <div className="mx-4">
                        <a href="/">
                          <i><img src="/comment-icon.svg" alt="Comment" />
                          </i>0 COMMENTS</a>
                      </div>
                      <div className="mx-4">
                        <a href="/">
                          <i><img src="/link-icon.svg" alt="Like" />
                          </i>Like</a>
                      </div>
                    </div>

                    <h2 className="mt-5">Post a Comment</h2>
                    <p>When working with the Bootstrap grid system, be sure to place form elements within column classes.</p>
                    <form className="mb-5">
                      <div className="row g-2 mt-4">
                        <div className="col-md">
                          <div className="form-floating mb-4">
                            <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                            <label for="floatingName">Name</label>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-floating ">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                          Save my name, email, and website in this browser for the next time I comment.
                        </label>
                      </div>
                      <div className="form-floating mb-4">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
                      <button type="submit" className="btn btn-primary-orange btn-orange btn-lg">Submit</button>
                    </form>
                  </section>
                </div>

                <div className="col-lg-4 blog-sideBar">
                  <form>
                    <div className="input-group mb-3 search-input mb-5">
                      <input type="text" className="form-control " placeholder="Search" aria-label="Search" aria-describedby="button-search" />
                      <button className="btn btn-outline-secondary fs-3" type="button" id="button-search"><i className="bi bi-search"></i></button>
                    </div>
                  </form>
                  <section>
                    <h4 className="mt-5 mb-4">Recent Posts</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</li>
                      <li>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempo consectetur adipiscing elit, sed
                        do eiusmod tempo</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                      <li>Lorem ipsum dolor sit amet, adipiscing elit, sed doconsectetur eiusmod tempo</li>
                    </ul>

                    <h4 className="mt-5 mb-4">Categories</h4>
                    <ul>
                      <li>consectetur</li>
                      <li>dolor Lorem ipsum </li>
                      <li>consectetur adipiscing elit </li>
                      <li>eiusmod tempo</li>
                    </ul>

                    <h4 className="mt-5 mb-4">Tags</h4>
                    <ul className="tags-box d-flex flex-wrap-reverse">
                      <li><a href="/">adipiscing</a> </li>
                      <li><a href="/">consectetur </a></li>
                      <li><a href="/">Lorem </a> </li>
                      <li><a href="/">adipiscing</a> </li>
                      <li><a href="/">tempo</a></li>
                      <li><a href="/">Lorem </a> </li>
                      <li><a href="/">Lorem </a> </li>
                      <li><a href="/">adipiscing</a> </li>
                    </ul>

                    <h4 className="mt-5 mb-4">Recent Comments</h4>
                    <ul>
                      <li>consectetur</li>
                      <li>dolor Lorem ipsum </li>
                      <li>consectetur adipiscing elit </li>
                      <li>eiusmod tempo</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </>

  );
};

export default Home; 