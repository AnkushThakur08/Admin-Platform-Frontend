import React from "react";

import { API } from "../../backend";

export const getAllUser = async () => {
  return fetch(`${API}/getDepartmentSalary`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getDepartmentDetailsByChart = async () => {
  return fetch(`${API}/getDepartmentDetailsByChart`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
