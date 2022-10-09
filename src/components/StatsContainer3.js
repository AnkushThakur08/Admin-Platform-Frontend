import React, { useState, useEffect } from "react";

// Icons

import { BiBlock } from "react-icons/bi";
import { CgUnblock } from "react-icons/cg";
import { MdCastForEducation } from "react-icons/md";

// Toast
import { toast } from "react-toastify";

// Components
import StatItem from "../components/StatItem";

// CSS
import Wrapper from "../assets/wrappers/StatsContainer";

// API
import { getEducationDetailsByChart } from "../helper/DashboardHelper/DashboardHelper";

const StatsContainer = () => {
  const [values3, setValues3] = useState({
    error: "",
    success: "false",
    datas3: [],
  });

  const preload = () => {
    getEducationDetailsByChart().then((data) => {
      console.log(data);
      console.log("SECOUNDATA", data.data);
      if (data.data.status == 400) {
        toast.error("ERROR");
        setValues3({ ...values3, success: false });
      } else {
        console.log(data.data);
        setValues3({ ...values3, datas3: data.data });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const data3 = [
    {
      AuthenticationMethod: "Blocked Education",
      count: values3.datas3.BlockCount,
      link: "/showBlockEducation",
    },

    {
      AuthenticationMethod: "UnBlock Education",
      count: values3.datas3.UnblockCount,
      link: "/showUnBlockEducation",
    },

    {
      AuthenticationMethod: "Total Education",
      count: values3.datas3.blockUnblockTotal,
      link: "/educationQualification",
    },
  ];

  const defaultState3 = [
    {
      title: "Blocked Education",
      count: data3[0].count || 0,
      icon: <BiBlock size={56} />,
      color: "#383CC1",
      bcg: "#e0e8f9",
      link: "/showBlockEducation",
    },
    {
      title: "unBlock Education",
      count: data3[1].count,
      icon: <CgUnblock size={56} />,
      color: "#e9b949",
      bcg: "#fcefc7",
      link: "/showUnBlockEducation",
    },

    {
      title: "Total Education",
      count: data3[2].count,
      icon: <MdCastForEducation size={56} />,
      color: "#3b82f6",
      bcg: "#e7f0fe",
      link: "/educationQualification",
    },
  ];
  return (
    <Wrapper>
      {defaultState3.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
