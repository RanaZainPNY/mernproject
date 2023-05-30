import React from "react";


const Head = () => {
  return (
    <>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#0f3460" }}
      >
        <div className="row py-3">
          <div className="col-md-6">
            <div className="row ">
              <div className="col-4 ">
                <span>
                  <i className="fa fa-phone"></i> +92 3098038720
                </span>
              </div>
              <div className="col-4">
                <span>
                  <i className="fa fa-phone"></i>+92 3098038720
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-2 offset-4">
                <label>Theme FAQ"s</label>
              </div>
              <div className="col-2">
                <label>Need Help?</label>
              </div>
              <div className="col-2">
                <span>🏳️‍⚧️</span>
                <label>EN</label>
              </div>
              <div className="col-2">
                <span>🏳️‍⚧️</span>
                <label>USD</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="head ">
        <div className="container-fluid d_flex border_red">
          <div className="left row border_green">
            <i className="fa fa-phone"></i>
            <label> +92 3098038720</label>
            <i className="fa fa-envelope"></i>
            <label> kamrandilshad@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Head;
