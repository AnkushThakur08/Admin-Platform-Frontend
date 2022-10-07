import React, { useState, useEffect } from "react";

// React-Router
import { Link, useNavigate } from "react-router-dom";

// Toast
import { toast } from "react-toastify";

// Components
import { Logo, FormRow } from "../../components";

// CSS
import Wrapper from "../../assets/wrappers/RegisterPage";

// API
import { API } from "../../backend";
import { login, authenticate } from "../../helper/LoginHelper/loginApiCall";

const initialState = {
  email: "",
  password: "",
  success: false,
  error: "",
};

const LoginEmailPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  console.log(`${API}`);

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);

    setValues({ ...values, error: false, [name]: value });
  };

  // When user Enter Email and Password
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { email, password } = values;

    if (!email || !password) {
      console.log("Please Fill out all the Fields");
      return toast.error("Please Fill out all the Fields");
    }
    setValues({ ...values, error: false });
    console.log(values);

    login({ email, password })
      .then((data) => {
        console.log(data);
        if (data.data.status == 400) {
          toast.error(data.data.message);
          setValues({ ...values, error: data.data.message, success: false });
        } else if (data.data.status == 200) {
          authenticate(data, () => {
            setValues({
              ...values,
              success: true,
              isMember: false,
            });
            console.log("THIS IS DATA", data);
            toast.success(data.data.message);
            console.log("Ankush");

            setTimeout(() => {
              navigate("/");
            }, 3000);
          });
        }
      })
      .catch((error) => {
        toast.error("Login Request Failed");
        console.log("Login Request Failed");
      });
  };

  return (
    <div>
      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <Logo />
          <h3>Login With Email</h3>

          {/* Email Field */}
          <FormRow
            type="email"
            name="email"
            values={values.email}
            handleChange={handleChange}
          />

          {/* Password Field */}
          <FormRow
            type="password"
            name="password"
            values={values.password}
            handleChange={handleChange}
          />
          <span>
            <Link to="/resetPassword" className="member-btn forgetPassword">
              Forget Password?
            </Link>
          </span>

          <button type="submit" className="btn btn-block" onClick={onSubmit}>
            Login
          </button>
          <p>
            Not a Member Yet? {""}
            <Link to="/Registration" className="member-btn">
              Register
            </Link>
          </p>
        </form>
      </Wrapper>
    </div>
  );
};

export default LoginEmailPage;
