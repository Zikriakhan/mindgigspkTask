import React from 'react'

function Context() {
  return (
    <div>
       <section
        className="breadcrumb__area pt-130 pb-115 breadcrumb__style-10 p-relative z-index-1"
        style={{
          backgroundColor: "#e1e1e1",
          paddingTop: "115px",
          paddingBottom: "130px",
        }}
      >
        <div
          className="breadcrumb__bg-4 breadcrumb__bg-overlay m-img include-bg"
          style={{
            backgroundImage:
              'url("https://mindgigspk.com/wp-content/uploads/2024/01/Untitled-1.jpg")',
          }}
        ></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">Courses</h3>
                <div className="breadcrumb__list">
                  <span property="itemListElement" typeof="ListItem">
                    <a
                      property="item"
                      typeof="WebPage"
                      title="Go to Mindgigs Best Software House in Peshawar."
                      href="https://mindgigspk.com"
                      className="home"
                    >
                      <span property="name">
                        Mindgigs Best Software House in Peshawar
                      </span>
                    </a>
                    <meta property="position" content="1" />
                  </span>
                  &gt;
                  <span property="itemListElement" typeof="ListItem">
                    <span
                      property="name"
                      className="post post-page current-item"
                    >
                      Courses
                    </span>
                    <meta
                      property="url"
                      content="https://mindgigspk.com/courses/"
                    />
                    <meta property="position" content="2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Context
