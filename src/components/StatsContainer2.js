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
    },

    {
      AuthenticationMethod: "UnBlock Department",
      count: values2.datas2.UnblockCount,
    },

    {
      AuthenticationMethod: "Total Department",
      count: values2.datas2.blockUnblockTotal,
    },
  ];

  const defaultState2 = [
    {
      title: "Blocked Department",
      count: data2[0].count || 0,
      icon: <GiMoneyStack size={56} />,
      color: "#383CC1",
      bcg: "#e0e8f9",
    },
    {
      title: "unBlock Department",
      count: data2[1].count,
      icon: <GiMoneyStack size={56} />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },

    {
        title: "Total Department",
        count: data2[1].count,
        icon: <GiMoneyStack size={56} />,
        color: "#e9b949",
        bcg: "#fcefc7",
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
