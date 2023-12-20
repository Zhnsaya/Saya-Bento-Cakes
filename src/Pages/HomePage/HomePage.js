import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../img/1.jpg";
import img8 from "../../img/8.jpg";
import img3 from "../../img/3.jpg";
import imgCategories1 from "../../img/categories/1.jpg";
import imgCategories2 from "../../img/categories/2.jpg";
import imgCategories3 from "../../img/categories/3.jpg";
import imgCategories4 from "../../img/categories/4.jpg";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="mainBody">
      <Carousel id="carouselMainPageIndicators" className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            height="1000px"
          />
          <Carousel.Caption className="text-center">
           
            <Link to="/menuPage">
              <a href="#" className="btn btn-primary btn-lg mt-3">
                Menu
              </a>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8}
            alt="Second slide"
            height="1000px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            height="1000px"
          />
          <Carousel.Caption className="text-center"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="popular-items mt-5">
        <div className="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div
                class="single-popular-items mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div class="popular-img">
                  <img
                    src={imgCategories1}
                    alt="cake"
                    width="300px"
                    height="350px"
                  ></img>
                  <div class="img-cap">
                    <span>Bento</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div
                class="single-popular-items mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div class="popular-img">
                  <img
                    src={imgCategories2}
                    alt="cake"
                    width="300px"
                    height="350px"
                  ></img>
                  <div class="img-cap">
                    <span>Cheesecake</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div
                class="single-popular-items mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div class="popular-img">
                  <img
                    src={imgCategories3}
                    alt="cake"
                    width="300px"
                    height="350px"
                  ></img>
                  <div class="img-cap">
                    <span>cake</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div
                class="single-popular-items mb-50 text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div class="popular-img">
                  <img
                    src={imgCategories4}
                    alt="cake"
                    width="300px"
                    height="350px"
                  ></img>
                  <div class="img-cap">
                    <span>cupcake</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="m-3 bg-dark"></hr>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default HomePage;
