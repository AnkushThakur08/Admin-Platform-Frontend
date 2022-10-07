import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { AiOutlineLeft } from "react-icons/ai";
import Form from "react-bootstrap/Form";

import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { API } from "../../../backend";

const EditEducationQualificationPage = () => {
  const [eduName, setEduName] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data", eduName);
  }

  async function save() {
    let item = {
      eduName,
    };
    console.log("edit", item);
    await fetch(`${API}updateEducationQualification/` + params.eduId, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((result) => {
      result.json().then((resq) => {
        console.log("This is resq ", resq);
        if (resq.data.status === 400) {
          return toast.error(resq.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        if (resq.statusCode === 200) {
          toast.success(resq.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });

          setTimeout(() => {
            navigate("/educationQualification");
          }, 2000);
        } else if (resq.data.status === "failed") {
          toast.error(resq.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    });
  }

  return (
    <>
      <div className="titles">
        <Container style={{ width: "900px" }}>
          <div className="admin-main">
            <div>
              <Link to="/educationQualification">
                <AiOutlineLeft fa-lg />
              </Link>
              Edit Education Qualification
            </div>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="required-FIELD">Name</Form.Label>
                <Form.Control
                  value={eduName}
                  onChange={(e) => setEduName(e.target.value)}
                  name="eduName"
                  type="text"
                  placeholder={"Enter Qualification"}
                />
              </Form.Group>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                }}
                type="submit"
                onClick={() => save()}
              >
                Save
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EditEducationQualificationPage;
