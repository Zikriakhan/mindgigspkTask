import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="header__bottom header__sticky" id="header-sticky">
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo logo-border">
                      <a
                        className="standard-logo"
                        href="https://mindgigspk.com/"
                      >
                        <img
                          data-width="120"
                          height="auto"
                          src="https://mindgigspk.com/wp-content/uploads/2023/12/Capture.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-9 d-none d-lg-block">
                    <div className="main-menu pl-15 main-menu-ff-space d-flex d-lg-block align-item-center justify-content-end">
                      <nav id="mobile-menu">
                        <ul id="menu-main-menu">
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-18153"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-18153 nav-item"
                          >
                            <a
                              title="Home"
                              href="https://mindgigspk.com/"
                              style={{ color: "black" }}
                              className="nav-links"
                            >
                              Home
                            </a>
                          </li>
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-3815"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3815 nav-item"
                          >
                            <a
                              style={{ color: "black" }}
                              title="About"
                              href="https://mindgigspk.com/about/"
                              className="nav-links"
                            >
                              About
                            </a>
                          </li>
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-18307"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown has-dropdown menu-item-18307 nav-item"
                          >
                            <a
                              style={{ color: "black" }}
                              title="Services"
                              href="https://mindgigspk.com/web-development/"
                              className="nav-links"
                            >
                              Services
                            </a>
                            <ul className="submenu" role="menu">
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18223"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18223 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Web Development"
                                  href="https://mindgigspk.com/web-development/"
                                  className="dropdown-items"
                                >
                                  Web Development
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18271"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18271 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Digital Marketing"
                                  href="https://mindgigspk.com/digital-marketing/"
                                  className="dropdown-items"
                                >
                                  Digital Marketing
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18257"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18257 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Graphic Design"
                                  href="https://mindgigspk.com/graphic-design/"
                                  className="dropdown-items"
                                >
                                  Graphic Design
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18283"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18283 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Mobile App"
                                  href="https://mindgigspk.com/mobile-app/"
                                  className="dropdown-items"
                                >
                                  Mobile App
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-19395"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19395 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="FYP Projects"
                                  href="https://mindgigspk.com/fyp-projects/"
                                  className="dropdown-items"
                                >
                                  FYP Projects
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-19396"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19396 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Social Media Marketing and Campaign"
                                  href="https://mindgigspk.com/social-marketing-and-campaign/"
                                  className="dropdown-items"
                                >
                                  Social Media Marketing and Campaign
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-18425"
                            className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-18423 current_page_item menu-item-has-children dropdown has-dropdown active menu-item-18425 nav-item"
                          >
                            <a
                              style={{ color: "black" }}
                              title="Courses"
                              href="https://mindgigspk.com/courses/"
                              className="nav-links"
                            >
                              Courses
                            </a>
                            <ul className="submenu" role="menu">
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18437"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18437 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Web Development full course"
                                  href="https://mindgigspk.com/web-development-full-course/"
                                  className="dropdown-items"
                                >
                                  Web Development full course
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18438"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18438 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Web Development Front End"
                                  href="https://mindgigspk.com/web-devolvement-front-end/"
                                  className="dropdown-items"
                                >
                                  Web Development Front End
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18436"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18436 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Video editing Course"
                                  href="https://mindgigspk.com/video-editing-course/"
                                  className="dropdown-items"
                                >
                                  Video editing Course
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18439"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18439 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="Digital Marketing Full Course"
                                  href="https://mindgigspk.com/digital-marketing-full-course/"
                                  className="dropdown-items"
                                >
                                  Digital Marketing Full Course
                                </a>
                              </li>
                              <li
                                itemscope="itemscope"
                                itemtype="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-18670"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18670 nav-item"
                              >
                                <a
                                  style={{ color: "black" }}
                                  title="CMS WordPress course in Peshawar, website development"
                                  href="https://mindgigspk.com/cms-wordpress-course-in-peshawar-website-devolvement/"
                                  className="dropdown-items"
                                >
                                  CMS WordPress course in Peshawar, website
                                  development
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-19638"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-19638 nav-item"
                          >
                            <a
                              style={{ color: "black" }}
                              title="Our Projects"
                              href="https://mindgigspk.com/project-list/"
                              className="nav-links"
                            >
                              Our Projects
                            </a>
                          </li>
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-3814"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3814 nav-item"
                          >
                            <a
                              style={{ color: "black" }}
                              title="Blog"
                              href="https://mindgigspk.com/blog/"
                              className="nav-links"
                            >
                              Blog
                            </a>
                          </li>
                          <li
                            itemscope="itemscope"
                            itemtype="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-3819"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3819 nav-item"
                          >
                            <a
                              style={{ color: "black" }}
                              title="Contact"
                              href="https://mindgigspk.com/contact/"
                              className="nav-links"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>

                      <div className="header__hamburger ml-50 d-lg-none">
                        <button
                          type="button"
                          className="hamburger-btn hamburger-btn-black offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                      <div className="header__action d-none d-xl-block">
                        <ul>
                          <li>
                            <button type="submit" classNames="search-open-btn">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M19.0002 19.0002L17.2002 17.2002"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                          </li>

                          <li>
                            <button
                              type="button"
                              classNames="hamburger-btn offcanvas-open-btn"
                            >
                              <span></span>
                              <span></span>
                              <span></span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div classNames="header__hamburger ml-50 d-xl-none">
                        <button
                          type="button"
                          classNames="hamburger-btn offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Navbar