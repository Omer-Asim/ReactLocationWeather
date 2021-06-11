import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <h4 className="blog-header-logo text-dark " href="#">
              Location Weather <br /> By Omer Asim
            </h4>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div>
      </header>
      <hr />
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2 text-muted" href="#">
            World
          </a>
          <a class="p-2 text-muted" href="#">
            U.S.
          </a>
          <a class="p-2 text-muted" href="#">
            Technology
          </a>
          <a class="p-2 text-muted" href="#">
            Design
          </a>
          <a class="p-2 text-muted" href="#">
            Culture
          </a>
          <a class="p-2 text-muted" href="#">
            Business
          </a>
          <a class="p-2 text-muted" href="#">
            Politics
          </a>
          <a class="p-2 text-muted" href="#">
            Opinion
          </a>
          <a class="p-2 text-muted" href="#">
            Science
          </a>
          <a class="p-2 text-muted" href="#">
            Health
          </a>
          <a class="p-2 text-muted" href="#">
            Style
          </a>
          <a class="p-2 text-muted" href="#">
            Travel
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
