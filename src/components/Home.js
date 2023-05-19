import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const  {user}  = useSelector((state) => state?.authDetails);

  const userName=user?.name
    navigate("/home");


  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark mt-4">
        <div class="container-fluid">
          <img
            src="https://th.bing.com/th/id/OIP.MP43q1GeGkcFfdlKJmSwZwHaGD?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            style={{ borderRadius: "50%", height: "5rem", width: "5rem" }}
            class="navbar-brand ms-4 "
          ></img>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarnav"
            class="navbar-toggler"
            aria-controls="navbarnav"
            aria-expanded="fale"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarnav">
            <ul class="navbar-nav">
              <li>
                <a href="#" class="nav-link ps-5">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ps-5">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ps-5">
                  Packages
                </a>
              </li>
              <li>
                <a href="#" class="nav-link ps-5">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mt-5 me-5">
        <h4 className="text-center">Hello Welcome {userName}</h4>
      </div>

      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Angular
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset "
                    style={{ textDecoration: "none" }}
                  >
                    React
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Vue
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Laravel
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Settings
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Orders
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Help
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
