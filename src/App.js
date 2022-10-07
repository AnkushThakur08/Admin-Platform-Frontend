import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import { NavBar } from "./components";

// Normal Pages
import {
  LandingPage,
  ErrorPage,
  RegistrationEmailPage,
  LoginEmailPage,
  ForgetMailPasswordPage,
  CreateNewMailPasswordPage,
} from "./pages";

// Shared Pages
import {
  InvitiesPage,
  NotificationPage,
  ProfilePage,
  StatsPage,
  DepartmentPage,
  AddEmployeePage,
  SalaryPage,
  EducationQualificationPage,
  EditEducationQualificationPage,
  AddEducationQualificationPage,
  AddDepartmentPage,
  EditDepartmentPage,
  ViewIndividualEducationPage,
  EditSalaryPage,
  AddEmployeePage2,
} from "./pages/Dashboard";

// Protected Routes
import { isAuthenticated, isAuthenticated2 } from "./helper/ApiCall";

const App = () => {
  return (
    <BrowserRouter>
      {console.log(Boolean(isAuthenticated()))}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated() ? <NavBar /> : <Navigate to="/home" />}
        >
          {/* <Route path="/" element={<ProtectedJWT Cmp={NavBar} />}> */}
          <Route
            index
            element={
              isAuthenticated() ? <StatsPage /> : <Navigate to="/home" />
            }
          />

          {/* TODO: LINKS */}

          {/* TODO: EDUCATION */}

          <Route
            path="educationQualification"
            element={
              isAuthenticated() ? (
                <EducationQualificationPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          <Route
            path="/editEducation/:eduId"
            element={
              isAuthenticated() ? (
                <EditEducationQualificationPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          <Route
            path="/addEducation"
            element={
              isAuthenticated() ? (
                <AddEducationQualificationPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          {/* TODO: DEPARTMENT */}

          <Route
            path="department"
            element={
              isAuthenticated() ? <DepartmentPage /> : <Navigate to="/home" />
            }
          />

          <Route
            path="/addDepartment"
            element={
              isAuthenticated() ? (
                <AddDepartmentPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          <Route
            path="/editDepartment/:deptId"
            element={
              isAuthenticated() ? (
                <EditDepartmentPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          {/* SALARY */}

          <Route
            path="salary"
            element={
              isAuthenticated() ? <SalaryPage /> : <Navigate to="/home" />
            }
          />

          <Route
            path="/ViewIndividualEducationPage/:salaryId"
            element={
              isAuthenticated() ? (
                <ViewIndividualEducationPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          <Route
            path="/editSalary/:salaryId"
            element={
              isAuthenticated() ? <EditSalaryPage /> : <Navigate to="/home" />
            }
          />

          {/* Employee */}
          <Route
            path="employee"
            element={
              isAuthenticated() ? <AddEmployeePage /> : <Navigate to="/home" />
            }
          />

          <Route
            path="addEmployeePage2"
            element={
              isAuthenticated() ? <AddEmployeePage2 /> : <Navigate to="/home" />
            }
          />

          {/* <Route
            path="Invites"
            element={
              isAuthenticated() ? <InvitiesPage /> : <Navigate to="/home" />
            }
          /> */}

          {/* <Route
            path="Notification"
            element={
              isAuthenticated() ? <NotificationPage /> : <Navigate to="/home" />
            }
          /> */}

          <Route
            path="Profile"
            element={
              isAuthenticated() ? <ProfilePage /> : <Navigate to="/home" />
            }
          />
        </Route>

        <Route path="/home" element={<LandingPage />} />
        <Route path="/Registration" element={<RegistrationEmailPage />} />
        <Route path="/Login" element={<LoginEmailPage />} />

        {/* Forget Password mail */}
        <Route path="/resetPassword" element={<ForgetMailPasswordPage />} />
        <Route
          path="/reset/:token/:id"
          element={<CreateNewMailPasswordPage />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
