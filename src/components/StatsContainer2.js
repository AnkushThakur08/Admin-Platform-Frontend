import React, { useState, useEffect } from "react";

// Icons

import { BiBlock } from "react-icons/bi";
import { CgUnblock } from "react-icons/cg";
import { FcDepartment } from "react-icons/fc";

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
  const [values2, setValues2] = useState({
    error: "",
    success: "false",
    datas2: [],
  });

  const preload = () => {
    getDepartmentDetailsByChart().then((data) => {
      console.log(data);
      console.log("SECOUNDATA", data.data);
      if (data.data.status == 400) {
        toast.error("ERROR");
        setValues2({ ...values2, success: false });
      } else {
        console.log(data.data);
        setValues2({ ...values2, datas2: data.data });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const data2 = [
    {
      AuthenticationMethod: "Blocked Department",
      count: values2.datas2.BlockCount,
      link: "/blockDepartment",
    },

    {
      AuthenticationMethod: "UnBlock Department",
      count: values2.datas2.UnblockCount,
      link: "/unblockDepartment",
    },

    {
      AuthenticationMethod: "Total Department",
      count: values2.datas2.blockUnblockTotal,
      link: "/department",
    },
  ];

  const defaultState2 = [
    {
      title: "Blocked Department",
      count: data2[0].count || 0,
      icon: <BiBlock size={56} />,
      color: "#383CC1",
      bcg: "#e0e8f9",
      link: "/blockDepartment",
    },
    {
      title: "unBlock Department",
      count: data2[1].count,
      icon: <CgUnblock size={56} />,
      color: "#e9b949",
      bcg: "#fcefc7",
      link: "/unblockDepartment",
    },

    {
      title: "Total Department",
      count: data2[2].count,
      icon: <FcDepartment size={56} />,
      color: "#3b82f6",
      bcg: "#e7f0fe",
      link: "/department",
    },
  ];
  return (
    <Wrapper>
      {defaultState2.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
