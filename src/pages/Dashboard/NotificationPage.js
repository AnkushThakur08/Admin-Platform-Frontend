import React, { useState, useEffect } from "react";

// Toast
import { toast } from "react-toastify";

// Components
import { FormRow, Pagination } from "../../components";
import { IoMdNotifications } from "react-icons/io";

// CSS
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import Wrapper1 from "../../assets/wrappers/GetNotifications";

// API
import { getNotifications } from "../../helper/ApiCall";

const NotificationPage = () => {
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
    getNotifications().then((data) => {
      console.log(data);
      console.log(data.data.notification);
      console.log(data.data.notification.rows);
      if (data.data.status == 400) {
        toast.error(data.data.message);
        setValues({ ...values, error: data.data.message, success: false });
      } else {
        // console.log(data.data.user.rows);
        // console.log(data.data.user.rows[0].authenticationMethod);
        setValues({ ...values, data: data.data.notification.rows });
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

  return (
    <Wrapper>
      <form className="form">
        <h3> Notification Center</h3>
        <div className="form-center">
          {/* <Wrapper> */}
          {data
            .slice(pagination.start, pagination.end)
            .map((individualData, index) => {
              console.log(individualData);

              return (
                <Wrapper1>
                  <div key={index}>
                    <IoMdNotifications className="icon" size={15} />
                    <br />
                    <span className="count">
                      Notification Title : {individualData.content}
                    </span>
                  </div>
                  <header>
                    <div className="title">
                      Notification Sender: {individualData.User.name}
                    </div>
                  </header>
                </Wrapper1>
              );
            })}
        </div>
      </form>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={data.length}
      />
    </Wrapper>
  );
};

export default NotificationPage;
