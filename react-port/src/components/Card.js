import React from "react";
import Pic from "../pics/PIC.jpeg";
import "../styles/Main.css";

function Card() {
  return (
    <div className="bigDiv">
      <div className="card mb-3 smallDiv" style={{ maxWidth: "680px" }}>
        <div className="row g-0 ">
          <div className="col-md-4 picDiv">
            <img src={Pic} class="img-fluid rounded-start compPic" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Harsh Tripathi</h5>
              <p className="card-text">
                {" "}
                I am a coder and a front end developer. I posses good
                communication skills. All abide by Git and Github commands. I am
                here to build next generation softwares and provide a world with
                better technology.If you want to collaborate, then do reach me
                out using below links.
              </p>
              <a href="#" className="btn btn-primary btn-sm">
                Here's my Github profile
              </a>
              <br />
              <br />
              <a href="#" className="btn btn-primary btn-sm">
                Here's my linked-in profile
              </a>
              <br />
              <br />
              <a href="#" className="btn btn-primary btn-sm">
                Here's my insta account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
