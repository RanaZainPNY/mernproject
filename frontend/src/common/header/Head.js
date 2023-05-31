import React from "react";

const Head = () => {
  return (
    <>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#B28A5E" }}
      >
        <div className="row py-1">
          <div className="col">
            <div className="row d-flex justify-content-start">
              <div className="col-3 ">
                <span>
                  <i className="fa fa-phone"></i> +923098038720
                </span>
              </div>
              <div className="col-4">
                <span>
                  <i className="fa fa-envelope"></i> antiques@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="col  d-flex justify-content-end">
            <div className="row">            
              <div className="col">                
                <Link to='/signin' style={{ textDecoration: 'none', color: "white", fontWeight: "bold",}}>Sign-in</Link>
              </div>
              <div className="col">
                <Link to='/register' style={{ textDecoration: 'none', color: "white", fontWeight: "bold",}}>Register</Link>                
              </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
};

export default Head;
