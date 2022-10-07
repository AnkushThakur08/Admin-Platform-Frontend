import React, { useCon } from "react";

import { API } from "../backend";

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

export const signIn = async (user) => {
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

export const registrationOTP = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/registrationSendOTP`, {
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

export const loginOTP = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/SendOTP`, {
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

export const verifyOTP = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/verifyOTP`, {
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

export const verifyOTPLogin = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/verifyOTPLogin`, {
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

export const SaveNewPhonePassword = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/changePhonePassword`, {
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

export const SendInviteFriendMail = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/SendInviteFriendMail`, {
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

export const AcceptInvite = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/AcceptInvite`, {
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

export const RejectInvite = async (user) => {
  console.log(API);
  console.log(user);
  return await fetch(`${API}/RejectInvite`, {
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

export const updateUser = async (token, user) => {
  return await fetch(`${API}/updateUser`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const registrationByGoogle = async (user) => {
  return await fetch(`${API}/google`, {
    method: "GET",

    // body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getNotifications = async () => {
  return fetch(`${API}/getNotification`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getInvities = async () => {
  return fetch(`${API}/allInvities`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

// FIXME: COUNT
export const getAllUser = async () => {
  return fetch(`${API}/getAllUser`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const countAllUser = async () => {
  return fetch(`${API}/countAllUser`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

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

export const isAuthenticated2 = () => {
  if (typeof window == "undefined") {
    return false;
  }

  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};
