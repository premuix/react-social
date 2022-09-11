const Footer= () => { 

  return (
    <>

<footer className="bg-dark ">
        <div className="container py-5">
          <div className=" d-flex align-items-center">
            <div className="p-2 flex-grow-1 text-white sw-social">
              <p className="fs-5">Let’s keep in touch!<br />
                Find us on any of these platforms.</p>
              <a href="/"><img src="./assets/images/icon-github.svg" alt="git" /></a>
              <a href="/"><img src="./assets/images/icons-linkedin.svg" alt="linkedin" /></a>
              <a href="/"><img src="./assets/images/icons-twitter.svg" alt="twitter" /></a>
            </div>
            <div className="p-2 text-white">
              <p className="h2 ">Address</p>
              Flat T-11/805, Tata Ariana, Mahalaxmi Vihar, <br />
              Bhubaneswar, Odisha 751029 IN
            </div>
          </div>
        </div>
        <section className="copy-right">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className=" flex-grow-1 ">
                <img src=" ./assets/images/logoSocialWell.svg" alt="logo" />
              </div>
              <div className="">
                <p className="fs-14 fw-light mt-3">＠ SocialWell Technologies Private Limited</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer; 