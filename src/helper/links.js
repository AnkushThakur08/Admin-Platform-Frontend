import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";

const links = [
  {
    id: 1,
    text: "Dashboard",
    path: "/",
    icon: <IoBarChartSharp size={30} />,
  },
  {
    id: 2,
    text: "Qualification",
    path: "educationQualification",
    icon: <MdCastForEducation size={30} />,
  },
  {
    id: 3,
    text: "Department",
    path: "department",
    icon: <FcDepartment size={30} />,
  },

  {
    id: 5,
    text: "Salary",
    path: "salary",
    icon: <GiMoneyStack size={30} color="#627D98" />,
  },
  {
    id: 6,
    text: "Add Employee",
    path: "employee",
    icon: <FaUserFriends color="#627D98" />,
  },
  {
    id: 7,
    text: "Employee Record",
    path: "profile",
    icon: <ImProfile color="#627D98" />,
  },
];

export default links;
