import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ProtectedJWT = (props) => {
  const navigate = useNavigate();
  const Cmp = props.Cmp;
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default ProtectedJWT;
