import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { register } from "../store/userAuth/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelRegister = async () => {
    await dispatch(register(name, email, password));
    navigate("/");
  };
  
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign up with</p>

            <MDBBtn floating size="md" tag="a" className="me-2 bg-dark">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2 bg-dark">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2 bg-dark">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="User Name"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn
              className="mb-0 px-5 bg-dark"
              size="lg"
              onClick={handelRegister}
            >
              Register
            </MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Already have an account?{" "}
              <a href="#!" className="link-danger">
                Login
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Register;
