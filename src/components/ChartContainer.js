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
import { getAllUser } from "../helper/DashboardHelper/DashboardHelper";

const ChartContainer = () => {
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

  useEffect(() => {
    preload();
  }, []);

  var { datas } = values;
  console.log(datas);

  const data = [
    {
      AuthenticationMethod: "Level-1",
      count: values.datas.countBySalaryLevel1,
    },

    {
      AuthenticationMethod: "Level-2",
      count: values.datas.countBySalaryLevel2,
    },

    {
      AuthenticationMethod: "Level-3",
      count: values.datas.countBySalaryLevel3,
    },
  ];

  const [barChart, setBarChart] = useState(true);

  return (
    <div id="charts">
      <Wrapper>
        <h2>Salary Chart</h2>
        <button type="button" onClick={() => setBarChart(!barChart)}>
          {barChart ? "Area Chart" : "Bar Chart"}
        </button>

        {data.map((individualData, index) => {
          console.log(individualData);
        })}

        {barChart ? <BarCharts data={data} /> : <AreaCharts data={data} />}
      </Wrapper>
    </div>
  );
};

export default ChartContainer;
