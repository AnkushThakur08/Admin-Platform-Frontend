import React, { useState } from "react";

// Toast
import { toast } from "react-toastify";

// Components
import { FormRow } from "../../../components";

// CSS
import Wrapper from "../../../assets/wrappers/DashboardFormPage";

// React Router
import { useNavigate } from "react-router-dom";

// API
import { addEmployee } from "../../../helper/EmployeeHelper/EmployeeApiCall";

const AddEmployeePage = () => {
  // navigate
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    DOB: "",
    DateOfJoining: "",
    gender: "",
    address: "",
    error: "",
    success: false,
  });

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
    setUserData({ ...userData, error: false, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, name, DOB, DateOfJoining, gender, address } = userData;

    if ((!email, !name, !DOB, !DateOfJoining, !gender || !address)) {
      console.log("Please Fill out all the Fields");
      return toast.error("Please Fill out all the Fields");
    }

    addEmployee({ email, name, DOB, DateOfJoining, gender, address }).then(
      (data) => {
        console.log(data);
        if (data.data.status == 400) {
          toast.error(data.data.message);
          setUserData({
            ...userData,
            error: data.data.message,
            success: false,
          });
        } else if (data.data.status == 200) {
          setUserData({
            ...userData,
            success: true,
          });
          toast.success(data.data.message);

          setTimeout(() => {
            navigate("/addEmployeePage2");
          }, 3000);
        }
      }
    );
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3> Add Employee</h3>
        <div className="form-center">
          {/* NAME */}
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />

          {/* EMAIL */}
          <FormRow
            type="text"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />

          {/* DOB */}
          <FormRow
            type="date"
            name="DOB"
            value={userData.DOB}
            handleChange={handleChange}
          />

          {/* DateOfJoining */}
          <FormRow
            type="date"
            name="DateOfJoining"
            value={userData.DateOfJoining}
            handleChange={handleChange}
          />

          {/* gender */}
          <FormRow
            type="text"
            name="gender"
            value={userData.gender}
            handleChange={handleChange}
          />

          {/* Address */}
          <FormRow
            type="text"
            name="address"
            value={userData.address}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-block changes"
            onClick={handleSubmit}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddEmployeePage;
