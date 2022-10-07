import React, { useState, useEffect } from "react";

// Charts
import { BarCharts } from "../components";
import { AreaCharts } from "../components";

// Toast
import { toast } from "react-toastify";

// CSS
import Wrapper from "../assets/wrappers/ChartsContainer";

// API
import { API } from "../backend";
import {
  getAllUser,
  getDepartmentDetailsByChart,
} from "../helper/DashboardHelper/DashboardHelper";

const ChartContainer = () => {
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

  console.log("SECONDDATA", values2.datas2);

  useEffect(() => {
    preload();
  }, []);

  var { datas2 } = values2;
  console.log("SECONDDATA", datas2);

  //TODO: SECOND

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

  const [barChart2, setBarChart2] = useState(true);

  return (
    <div id="charts">
      <Wrapper>
        {/* TODO:SECOND */}
        <h2>Department Chart</h2>
        <button type="button" onClick={() => setBarChart2(!barChart2)}>
          {barChart2 ? "Area Chart" : "Bar Chart"}
        </button>

        {data2.map((individualData, index) => {
          console.log(individualData);
        })}

        {barChart2 ? <BarCharts data={data2} /> : <AreaCharts data={data2} />}
      </Wrapper>
    </div>
  );
};

export default ChartContainer;
