import React, { useState } from "react";

// React-Router
import { useNavigate } from "react-router-dom";

// Toast
import { toast } from "react-toastify";

// Components
import { Logo, FormRow } from "../../components";
import ForgetPassword from "../../assets/images/forgetPassword.svg";

// CSS
import Wrapper from "../../assets/wrappers/RegisterPage";

// API
import { API } from "../../backend";
import { forgetPassword } from "../../helper/ApiCall";

const initialState = {
  email: "",
  success: false,
  error: "",
};

const ForgetMailPasswordPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const { email } = values;

  console.log(`${API}`);

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);

    setValues({ ...values, error: false, [name]: value });
  };

  // When user Enter Email
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    if (!email) {
      console.log("Please Enter your Email");
      return toast.error("Please Enter your Email");
    }
    setValues({ ...values, error: false });

    forgetPassword({ email })
      .then((data) => {
        console.log(data);
        if (data.data.status == 400) {
          toast.error(data.data.message);
          setValues({ ...values, error: data.data.message, success: false });
        } else if (data.data.status == 200) {
          setValues({
            ...values,
            success: true,
          });
          toast.success(data.data.message);

          setTimeout(() => {
            navigate("/Login");
          }, 3000);

          console.log("Ankush");
        }
      })
      .catch((error) => {
        toast.error("Unable to Send the Mail");
        console.log("Unable to Send the Mail");
      });
  };

  return (
    <div>
      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <Logo />
          <h3>
            <h3>Forget Password</h3>
            <img
              className="img-fluid smallforgetPassword"
              src={ForgetPassword}
              alt=""
            />
          </h3>

          {/* Email Field */}
          <FormRow
            type="email"
            name="email"
            values={values.email}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block" onClick={onSubmit}>
            Send Mail
          </button>
        </form>
      </Wrapper>
    </div>
  );
};

export default ForgetMailPasswordPage;
