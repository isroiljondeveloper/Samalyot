import React from "react";

const Navheader = () => {
  return (
    <div class="nav-header">
      <div class="container d-flex flex-md-row flex-column justify-content-between align-items-center pt-5">
        <img class="img-fluid" src="./img/image.png" alt="" />
        <ul class="navbar-nav flex-row justify-content-around d-lg-flex d-none gap-xl-5 gap-4">
          <li>
            <a href="" class="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              Booking
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              Private Jet
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              Specification
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              Luxury Charters
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              Membership
            </a>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-3 flex-row d-lg-flex d-none">
          <p class="rig">Register</p>
          <button class="sig">Sign In</button>
        </div>
        <button
          class="btn d-lg-none d-flex fs-4"
          type="button"
          data-bs-togg
          mx-autole="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="tun fa-solid fa-bars-stagg mx-autoered"></i>
          
        </button>
        <div
          class="offcanvas offcanvas-end p-5"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <img class="dd img-fluid" src="./img/image.png" alt="" />
          <div class="offcanva s-body d-flex flex-column gap-3">
            <ul class="navbar-nav">
              <li>
                <a href="#!" class="nav-link fs-5">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Category
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Shop
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Blog
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="header">
        <div class="container">
          <h1 class="header-title">
            Enjoy <span class="ss">Reserved</span> <br />
            Overhead bin space
          </h1>
          <h3 class="header-subtitle display-4 fw-bold">
            Explore Now
            <img src="./img/image copy.png" alt="" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navheader;
