import React from "react";

function Contact() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CONTACT FORM</h1>
      <div className="container">
        <div className="container4">
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Mobile Number
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="XXXXXXXXXX"
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Address
            </label>
            <input
              type="email"
              classNAme="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your address...."
            />
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <a href="mailto:tripathiharsh16@gmail.com" class="btn btn-primary">
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
