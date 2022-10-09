import React, { useState, useEffect } from "react";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";

// Toast
import { toast } from "react-toastify";

// Components
import StatItem from "../components/StatItem";

// CSS
import Wrapper from "../assets/wrappers/StatsContainer";

// API
import {
  getAllUser,
  getDepartmentDetailsByChart,
} from "../helper/DashboardHelper/DashboardHelper";

const StatsContainer = () => {
  const [values, setValues] = useState({
    error: "",
    success: "false",
    datas: [],
  });

  const preload = () => {
    getAllUser().then((data) => {
      console.log(data);
      console.log(data.data);
      if (data.data.status == 400) {
        toast.error("ERROR");
        setValues({ ...values, success: false });
      } else {
        console.log(data.data);
        setValues({ ...values, datas: data.data });
      }
    });
  };

  console.log(values.datas);
  console.log(values.datas.countByPhoneNumber);

  useEffect(() => {
    preload();
  }, []);

  console.log(values.datas.countByPhoneNumber);

  const data = [
    {
      AuthenticationMethod: "Level-1",
      count: values.datas.countBySalaryLevel1,
      link: "/salary1department",
    },
    {
      AuthenticationMethod: "Level-2",
      count: values.datas.countBySalaryLevel2,
      link: "/salary2department",
    },

    {
      AuthenticationMethod: "Level-3",
      count: values.datas.countBySalaryLevel3,
      link: "/salary3department",
    },
  ];

  {
    data.map((individualData, index) => {
      console.log(individualData);
    });
  }

  const defaultState = [
    {
      title: "Department provide Level-1 Salary",
      count: data[0].count || 0,
      icon: <GiMoneyStack size={56} />,
      color: "#383CC1",
      bcg: "#e0e8f9",
      link: "/salary1department",
    },
    {
      title: "Department provide Level-2 Salary",
      count: data[1].count,
      icon: <GiMoneyStack size={56} />,
      color: "#e9b949",
      bcg: "#fcefc7",
      link: "/salary2department",
    },

    {
      title: "Department provide Level-3 Salary",
      count: data[2].count || 0,
      icon: <GiMoneyStack size={56} />,
      color: "#3b82f6",
      bcg: "#e7f0fe",
      link: "/salary3department",
    },
  ];

  return (
    <Wrapper>
      {defaultState.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
