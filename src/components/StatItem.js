import React from "react";

import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ count, title, icon, color, bcg, link }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <a href={link}>
          <span className="count">{count}</span>{" "}
        </a>
        <span className="icon">{icon}</span>
      </header>

      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
