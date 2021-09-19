import React from "react";

function Contactinformation() {
  return (
    <>
      <div className="information-wrapper">
        <div className="information">
          <i className="fas fa-envelope"></i>
          <p>Hello@yay.com</p>
        </div>
        <div className="information">
          <i className="fas fa-phone-alt"></i>
          <p>123 456 7890</p>
        </div>
        <div className="information">
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Some Street Somewhere Some City 10000</p>
        </div>
      </div>
    </>
  );
}

export default Contactinformation;
