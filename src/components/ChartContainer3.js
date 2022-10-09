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
  getEducationDetailsByChart,
} from "../helper/DashboardHelper/DashboardHelper";

const ChartContainer = () => {
  const [values3, setValues3] = useState({
    error: "",
    success: "false",
    datas3: [],
  });

  const preload = () => {
    getEducationDetailsByChart().then((data) => {
      console.log(data);
      console.log("THIRDATA", data.data);
      if (data.data.status == 400) {
        toast.error("ERROR");
        setValues3({ ...values3, success: false });
      } else {
        console.log(data.data);
        setValues3({ ...values3, datas3: data.data });
      }
    });
  };

  console.log("THIRD", values3.datas3);

  useEffect(() => {
    preload();
  }, []);

  var { datas3 } = values3;
  console.log("THIRDDATA", datas3);

  //TODO: THIRD

  const data3 = [
    {
      AuthenticationMethod: "Blocked Education",
      count: values3.datas3.BlockCount,
    },

    {
      AuthenticationMethod: "UnBlock Education",
      count: values3.datas3.UnblockCount,
    },

    {
      AuthenticationMethod: "Total Education",
      count: values3.datas3.blockUnblockTotal,
    },
  ];

  const [barChart3, setBarChart3] = useState(true);

  return (
    <div id="charts">
      <Wrapper>
        {/* TODO:SECOND */}
        <h2>Education Chart</h2>
        <button type="button" onClick={() => setBarChart3(!barChart3)}>
          {barChart3 ? "Area Chart" : "Bar Chart"}
        </button>

        {data3.map((individualData, index) => {
          console.log(individualData);
        })}

        {barChart3 ? <BarCharts data={data3} /> : <AreaCharts data={data3} />}
      </Wrapper>
    </div>
  );
};

export default ChartContainer;
