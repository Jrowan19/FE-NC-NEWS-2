import React from 'react';

const SideBar = () => {
  return (
    <>
      <div class="container-fluid ">
        <div class="row">
          <nav class="col-md-10 d-none d-md-block sb-bg sidebar border border-light">
            <a class="" href="#">
              Generic Brand
            </a>
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="col-md-10 offset-md-2">
            <div class="container">
              <div class="row">
                <div id="dashboard" class="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
