import React from "react";

import { API } from "../../backend";

export const getEducationQualification = async () => {
  return fetch(`${API}/getEducationQualification`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getDepartment = async () => {
  return fetch(`${API}/getDepartment`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getSalary = async () => {
  return fetch(`${API}/getSalary`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const addEmployee = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/addEmployee`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

