import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div>
      <div className="custom-banner">
        <div
          className="m-auto d-flex align-items-center"
          style={{
            width: "400px",
            height: "50vh",
          }}
        >
          <div
            className="d-flex align-items-center"
            style={{
              width: "100%",
            }}
          >
            <input
              className="form-control rounded-pill"
              style={{ width: "100%", padding: "20px 20px" }}
              type="text"
              placeholder="Search for Food Items!"
            ></input>

            <span style={{ position: "relative", left: "-43px" }}>
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>
      <a
        href="https://dotnetmastery.com/Home/Details?courseId=29"
        target="_blank"
      >
        <div className="btn btn-danger form-control text-center text-white h4">
          This is a demo application based on{" "}
          <span className="text-warning"> Udemy Course by DotNetMastery!</span>{" "}
          To visit the course click on me!
        </div>
      </a>
    </div>
  );
}

export default Banner;
