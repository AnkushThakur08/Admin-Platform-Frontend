import React, { useState } from "react";

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
import { authenticate, signup } from "../../helper/LoginHelper/loginApiCall";

const initialState = {
  name: "",
  email: "",
  password: "",
  success: false,
  error: "",
};

const RegistrationEmailPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const { name, email, password } = values;

  console.log(`${API}`);

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);

    setValues({ ...values, error: false, [name]: value });
  };

  // When user Enter Email & Password
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    if (!email || !password || !name) {
      console.log("Please Fill out all the Fields");
      return toast.error("Please Fill out all the Fields");
    }
    setValues({ ...values, error: false });

    signup({ name, email, password })
      .then((data) => {
        // toast.error(data.data.message);
        console.log(data);
        // console.log(data.data.message);
        if (data.data.status == 400) {
          toast.error(data.data.message);
          setValues({ ...values, error: data.data.message, success: false });
        } else if (data.data.status == 200) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
            didRedirect: true,
          });
          toast.success(data.data.message);

          setTimeout(() => {
            navigate("/Login");
          }, 3000);

          console.log("Ankush");
        }
      })
      .catch((error) => {
        toast.error("Error in registration");
        console.log("Error in registration");
      });
  };

  return (
    <div>
      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <Logo />
          <h3>Register With Email</h3>
          {/* Name Field */}
          <FormRow
            type="text"
            name="name"
            values={values.name}
            handleChange={handleChange}
          />
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
          <button type="submit" className="btn btn-block" onClick={onSubmit}>
            SignUp
          </button>
          <p>
            {values.isMember ? "Not a Member Yet?" : "Already a Member? "}

            <Link to="/Login" className="member-btn">
              Login
            </Link>
          </p>
        </form>
      </Wrapper>
    </div>
  );
};

export default RegistrationEmailPage;
