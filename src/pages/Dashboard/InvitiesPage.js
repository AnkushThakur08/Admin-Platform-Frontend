import React, { useState, useEffect } from "react";

// Toast
import { toast } from "react-toastify";

// Components
import { FormRow, Pagination } from "../../components";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { MdOutlineError } from "react-icons/md";

// CSS
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import Wrapper1 from "../../assets/wrappers/getInvities";

// API
import { getInvities } from "../../helper/ApiCall";

const InvitiesPage = () => {
  const [showPerPage, setShowPerPage] = useState(3);

  const [values, setValues] = useState({
    error: "",
    success: "false",
    data: [],
  });

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const preload = () => {
    getInvities().then((data) => {
      console.log("STATE", showPerPage);
      console.log(data);
      console.log(data.data.user);
      console.log(data.data.user.rows);
      if (data.data.status == 400) {
        toast.error(data.data.message);
        setValues({ ...values, error: data.data.message, success: false });
      } else {
        // console.log(data.data.user.rows);
        // console.log(data.data.user.rows[0].authenticationMethod);
        setValues({ ...values, data: data.data.user.rows });
      }
    });
  };

  console.log(values.data);

  useEffect(() => {
    preload();
  }, []);

  var { data } = values;
  console.log(data);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  // TODO: PAGINATION
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  // const onDropDown = async (e) => {
  //   e.preventDefault();
  //   setShowPerPage(await e.target.value);
  //   console.log(showPerPage);
  //   preload();
  //   // alert(showPerPage);
  // };

  return (
    <Wrapper>
      <form className="form">
        <h3> Invities Send History</h3>
        <div className="form-center">
          {/* <Wrapper> */}

          {data
            .slice(pagination.start, pagination.end)
            .map((individualData, index) => {
              console.log(individualData);

              return (
                // TODO: BORDER
                <Wrapper1
                  style={
                    individualData.inivitationStatus == "Success"
                      ? {
                          borderBottom: "5px solid #02b290",
                        }
                      : {
                          borderBottom: "5px solid #b4161b",
                        }
                  }
                >
                  {/* TODO: ICON */}
                  <div key={index}>
                    {individualData.inivitationStatus == "Success" ? (
                      <TiTick className="icon" size={15} />
                    ) : (
                      <MdOutlineError className="red" size={40} />
                    )}

                    <br />

                    {/* TODO: MESSAGE */}
                    {individualData.inivitationStatus == "Success" ? (
                      <span className="count">
                        Invitation Status : {individualData.inivitationStatus}
                      </span>
                    ) : (
                      <span className="countRed">
                        Invitation Status : {individualData.inivitationStatus}
                      </span>
                    )}
                  </div>
                  <header>
                    <div className="title">
                      User Name: {individualData.name}
                    </div>
                  </header>

                  {individualData.inivitationStatus == "Success" ? (
                    <div className="titleGreen">
                      Sender Email: {individualData.senderEmail}
                    </div>
                  ) : (
                    <div className="titleRed">
                      Sender Email: {individualData.senderEmail}
                    </div>
                  )}
                </Wrapper1>
              );
            })}
        </div>
      </form>

      {/* <div className="dropdown">
        <select onChange={onDropDown}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option selected value="2">
            2
          </option>
          <option value="10">10</option>
        </select>
      </div> */}
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={data.length}
      />
    </Wrapper>
  );
};

export default InvitiesPage;
