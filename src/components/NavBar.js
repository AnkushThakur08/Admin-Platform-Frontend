import React, { useState } from "react";

// Icons
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

// Assets
import Logo from "./Logo";

// React Router
import links from "../helper/links";
import { NavLink, useNavigate, Outlet } from "react-router-dom";

// CSS
import Wrapper from "../assets/wrappers/Navbar";
import SideNavBarWrapper from "../assets/wrappers/SmallSidebar";
import BigSideBarWrapper from "../assets/wrappers/BigSidebar";
import Wrapper3 from "../assets/wrappers/SharedLayout";

// API
import { signout, isAuthenticated } from "../helper/ApiCall";

// Toast
import { toast } from "react-toastify";

const NavBar = () => {
  // Navigate
  const navigate = useNavigate();

  // State
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  // Value extraction
  const { data, token } = isAuthenticated();
  // console.log(data.user.name);

  const SideBar = () => {
    return (
      <SideNavBarWrapper>
        <div
          className={
            isSideBarOpen
              ? "sidebar-container show-sidebar"
              : "sidebar-container"
          }
        >
          <div className="content">
            <button
              className="close-btn"
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            >
              <FaTimes />
            </button>

            <header>
              <Logo />
            </header>

            <div className="nav-links">
              {links.map((link) => {
                const { text, path, id, icon } = link;
                return (
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return isActive ? "nav-link active" : "nav-link";
                    }}
                    key={id}
                    onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </SideNavBarWrapper>
    );
  };

  const BigSideBar = () => {
    return (
      <BigSideBarWrapper>
        <div
          className={
            isSideBarOpen
              ? "sidebar-container"
              : "sidebar-container show-sidebar"
          }
        >
          <div className="content">
            <header>
              <Logo className="logo" />
            </header>
          </div>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, id, icon } = link;
              return (
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  key={id}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </BigSideBarWrapper>
    );
  };

  const PageNavBar = () => {
    return (
      <Wrapper>
        <div className="nav-center">
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
              console.log(isSideBarOpen);
            }}
          >
            <FaAlignLeft />
          </button>
          <SideBar />

          <div>
            <Logo />
            <h3 className="logo-text">Applify Dashboard</h3>
          </div>

          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle />
              {/* Ankush */}
              {/* TODO: User name user?.name*/}
              {data ? data.user.name : "Ankush"}
              {/* {data.user.name} */}
              <FaCaretDown />
            </button>

            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => {
                  signout();

                  toast.success("User Logout Successfully");

                  setTimeout(() => {
                    navigate("/home");
                  }, 2000);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <Wrapper3>
      <main className="dashboard">
        <BigSideBar />
        <div>
          <PageNavBar />

          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper3>
  );
};

export default NavBar;
