import React from "react";

// Componets
import { StatsContainer } from "../../components";
import { ChartContainer } from "../../components";
import { StatsContainer2 } from "../../components";
import { ChartContainer2 } from "../../components";

// API
import { isAuthenticated } from "../../helper/ApiCall";

// Toast
import { toast } from "react-toastify";

const StatsPage = () => {
  const { data, token } = isAuthenticated();
  // console.log(data.user.name);
  return (
    <div>
      {/* {toast.success(`Welcome!! ${data.user.name}` || "Welcome User")} */}
      <StatsContainer />
      <ChartContainer />
      <br />
      <br /> 
      <StatsContainer2 />
      <ChartContainer2 />
    </div>
  );
};

export default StatsPage;
