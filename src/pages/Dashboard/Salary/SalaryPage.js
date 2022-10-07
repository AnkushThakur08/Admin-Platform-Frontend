import React, { useState, useEffect } from "react";

// Axios
import axios from "axios";

// React Toastify
import { toast } from "react-toastify";

// React Router DOM
import { useNavigate, Link } from "react-router-dom";

// React Table
import DataTable from "react-data-table-component";

// React Bootstrap
import Form from "react-bootstrap/Form";

// API
import { API } from "../../../backend";

// React Icons
import { ImBlocked } from "react-icons/im";
import { CgUnblock } from "react-icons/cg";
import { MdModeEditOutline } from "react-icons/md";

var result;

const SalaryPage = () => {
  // use Navigate
  const navigate = useNavigate();

  // For Searching in Table
  const [search, setSearch] = useState("");

  // For Storing API Response
  const [values, setValues] = useState({
    error: "",
    success: "false",
    data: [],
  });

  const [filterSearch, setFilterSearch] = useState({
    error: "",
    success: "false",
    data: [],
  });

  const [showModel, setShowModel] = useState(false);

  const [isBlocked, setIsBlocked] = useState("");

  console.log(isBlocked);

  // PAGINATION
  const paginationComponentOptions = {
    rangeSeparatorText: "Total",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  const isBlockDropDown = (e) => {
    setIsBlocked(e.target.value);
  };

  // TODO: API CALLS
  const preload = async () => {
    const data = await axios.get(
      `${API}/filterSalary?limit=10&skip=0&isBlocked=${isBlocked}`
      // `${API}/filterUser?limit=10&skip=0&isBlocked=1`
    );

    console.log(data);
    console.log(data.data.data);
    console.log(data.data.data.rows); /* Result we want */
    if (data.data.status == 400) {
      toast.error(data.data.message);
      setValues({ ...values, error: data.data.message, success: false });
    } else {
      setValues({ ...values, data: data.data.data.rows });
      setFilterSearch({ ...filterSearch, data: data.data.data.rows });
    }
  };

  async function blockSalary(salaryId) {
    await fetch(`${API}blockSalary/${salaryId}`, {
      method: "PUT",
    }).then((result) => {
      result.json().then((resq) => {
        console.log("blockinfo", resq);
        if (resq.data.status === "200") {
          toast.success(resq.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (resq.data.status === "201") {
          toast.success(resq.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast(resq.data.message);
        }
        preload();
      });
    });
  }

  useEffect(() => {
    preload();
    searchMethod();
  }, [search]);

  useEffect(() => {
    preload();
  }, [isBlocked]);

  // useEffect(() => {
  //   searchMethod();
  // }, [search]);

  const searchMethod = async () => {
    console.log("VALUESSSS", values.data);
    result = values.data.filter((value) => {
      return value.eduName.toLowerCase().match(search.toLowerCase());
    });
    setFilterSearch(result);
    console.log("SEARCH VALUR", result);
    console.log("FILTER-SEACH", filterSearch.data);
  };

  // TABLE Structure
  const colunms = [
    {
      name: (
        <h5>
          <b>Salary ID</b>
        </h5>
      ),
      selector: (row) => row.salaryId,
      sortable: true,
    },

    {
      name: (
        <h5>
          <b>Salary Type</b>
        </h5>
      ),
      selector: (row) => row.salaryType,
      sortable: true,
    },

    {
      name: (
        <h5>
          <b>Min Salary</b>
        </h5>
      ),
      selector: (row) => row.minSalary,
      sortable: true,
    },

    {
      name: (
        <h5>
          <b>Max Salary</b>
        </h5>
      ),
      selector: (row) => row.maxSalary,
      sortable: true,
    },

    {
      name: (
        <h5>
          <b>Record Creation Date</b>
        </h5>
      ),
      selector: (row) => row.createdAt,
      sortable: true,
    },

    {
      name: (
        <h5>
          <b>Action</b>
        </h5>
      ),
      selector: (row) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "110px",
          }}
        >
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={() => blockSalary(row.salaryId)}
          >
            {row.isBlocked ? (
              <ImBlocked size={23} color="red" />
            ) : (
              <CgUnblock size={30} color="green" />
            )}
          </button>

          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={() => navigate(`/editSalary/${row.salaryId}`)}
          >
            <MdModeEditOutline size={30} color="blue" />
          </button>
        </div>
      ),
    },
  ];

  const viewIndividualResult = (row) => {
    navigate(`/ViewIndividualEducationPage/${row.salaryId}`);
  };

  // useEffect(() => {
  //   admin();

  // }, [isBlocked]);

  return (
    <div>
      <DataTable
        title="Detail Salary Table"
        columns={colunms}
        // data={result ? result : values.data}
        data={values.data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        fixedHeader
        onRowClicked={viewIndividualResult}
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <>
            {/* <input
              type="text"
              placeholder="Search here"
              className="  form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                marginRight: "500px",
                width: "200px",
              }}
            /> */}
            <Form style={{ float: "left" }}>
              <Form.Label>Apply Filter</Form.Label>
              <Form.Select
                id="select"
                name="isBlocked"
                value={isBlocked}
                onChange={isBlockDropDown}
              >
                <option value="">All</option>
                <option value="1">Blocked</option>
                <option value="0">Un-Blocked</option>
              </Form.Select>
            </Form>
          </>
        }
      />

      {/* <Link to="/addSalary">
        <button
          style={{
            fontSize: "50px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "#CAD5E2",
            marginLeft: "1200px",
            padding: "0px 20px",
            marginTop: "40px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </Link> */}
    </div>
  );
};

export default SalaryPage;
