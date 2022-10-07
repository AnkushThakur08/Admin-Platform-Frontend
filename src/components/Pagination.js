import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

// CSS
import Wrapper from "../assets/wrappers/DashboardFormPage";

const Pagination = ({ /* showPerPage */ onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [perPageCount, setPerPageCount] = useState(2);
  console.log(perPageCount);
  useEffect(() => {
    const value = perPageCount * counter;

    onPaginationChange(value - perPageCount, value);
  }, [counter, perPageCount]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
        console.log(counter);
        toast(" 🦄 You are  on the Last Page");
      } else {
        setCounter(counter - 1);
        console.log(counter);
      }
    } else if (type === "next") {
      if (Math.ceil(total / perPageCount) === counter) {
        setCounter(counter);
        toast(" 🦄 There are no Futher records ");
      } else {
        setCounter(counter + 1);
      }
    }
  };

  // Pagination Dropdown
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  const onDropDown = async (e) => {
    e.preventDefault();
    setPerPageCount(await e.target.value);
    console.log(perPageCount);
    // alert(showPerPage);
  };

  return (
    <Wrapper>
      <div className="showPerPage">
        Show per Page {""}
        <select onChange={onDropDown}>
          <option selected value="2">
            2
          </option>
          <option value="3">3</option>

          <option value="5">5</option>

          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>

      {/* TODO:  */}
      <div style={{ textAlign: "center" }}>
        <button
          style={{ marginRight: "6rem" }}
          className="btn changes"
          onClick={() => onButtonClick("prev")}
        >
          Previous
        </button>

        <button className="btn  changes" onClick={() => onButtonClick("next")}>
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default Pagination;
