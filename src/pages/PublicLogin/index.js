import React from "react";
import "./index.css";
import { Alert } from "react-bootstrap";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Handlebutton from "../../components/LoginLogic/handlebutton";
import { useLocation } from "react-router";
import queryString from "query-string";
import Cookies from "js-cookie";

const PublicLogin = (submit) => {
  const isRegis = Cookies.get("isRegis");
  const location = useLocation();
  const queries = queryString.parse(location.search);

  const { handleChange, handleSubmit, errors, values, submitted } =
    Handlebutton(submit, queries);
  return (
    <section className="sign-section">
      <div className="sign-form">
        {/* {Object.keys(errors).length === 0 && submitted && (
          <div className="success">
            <div className="signinsuccess">Signed In successfully!</div>
          </div>
        )}  */}
        {isRegis && (
          <div className="status-error">
            <Alert variant="success" style={{ textAlign: "center" }}>
              Registration Success! Please login.
            </Alert>
          </div>
        )}
        {errors.status && (
          <div className="status-error">
            <Alert variant="danger" style={{ textAlign: "center" }}>
              {errors.status}
            </Alert>
          </div>
        )}
        <div className="square"></div>
        <h1>Welcome Back!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>{" "}
            {errors.email && (
              <span style={{ color: "red" }}>&#42;{errors.email}</span>
            )}
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={handleChange}
              value={values.email}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>{" "}
            {errors.password && (
              <span style={{ color: "red" }}>&#42;{errors.password}</span>
            )}
            <Form.Control
              type="password"
              placeholder="6+ Password"
              onChange={handleChange}
              value={values.password}
              name="password"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            {!submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
            {submitted && (
              <Button
                variant="primary"
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
            {/* {Object.keys(errors).length === 0 && submitted && (
              <div className="success">
                <Button
                  variant="primary"
                  className="Rentbtn"
                  onClick={rentClick}
                >
                  Rent a Car!
                </Button>
              </div>
            )} */}
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="sign-link">
              Sign Up for free
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img" />
    </section>
  );
};

export default PublicLogin;
