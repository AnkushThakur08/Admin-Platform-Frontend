import { API } from "../../backend";

// Registration and Login API
export const signup = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/registration`, {
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

export const login = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/login`, {
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

export const forgetPassword = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/sendResetPasswordMail`, {
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

export const SaveNewPassword = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/changePassword`, {
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

// MIDDLEWARE
//TODO: Middleware
export const authenticate = (data, next) => {
  // This Function store the JWT token(auth token) of the user in the localStorage
  if (typeof window !== "undefined") {
    /* Accessing the window Object */
    localStorage.setItem("jwt", JSON.stringify(data));
    // It sets the token in the user Browser, to verify the users
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

// Signout
export const signout = () => {
  if (typeof window !== "undefined") {
    // localStorage.removeItem("jwt");
    // next();
    // return fetch(`${API}/signout1`, {
    //   method: "GET",
    // })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
  }
};
