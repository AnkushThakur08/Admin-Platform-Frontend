import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);

  h3 {
    margin-top: 0;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-row {
    margin-bottom: 2rem;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }

  .chatRight {
    background: #4dd637;
    /* background: #03c6c7; */ /* Teal Color */
    margin: 10px;
    padding: 5px;
    padding-right: 22px;
    border-radius: 10px;
    margin-left: 0px;
  }

  /*TODO: CHAT */

  .logout {
    float: right;
    margin-top: -4rem;
  }

  .home_container {
    /* position: relative; */
    display: grid;
    grid-template-columns: 1fr 4fr;
    overflow: hidden;
    height: calc(100vh - 70px);
  }

  /* Total user ka BG */
  .users_container {
    margin-top: 10px;
    border-right: 2px solid #cad5e2;
    overflow-y: auto;
    background: #cad5e2;
  }

  /* Total user ko sepereate krne ka */
  .user_wrapper {
    padding: 10px;
    cursor: pointer;
    color: #0a5adb;
    border-bottom: 1px solid;
  }

  .user_info {
    align-items: center;
  }

  .user_detail {
    display: flex;
    align-items: center;
    background: gray;
  }

  .user_detail h4 {
    margin-left: 10px;
  }

  .user_status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: -1rem;
  }

  .online {
    background: #34eb52;
  }

  .offline {
    background: red;
  }

  /* Chat main Content */

  .messages_container {
    /* position: relative; */
    width: 100%;
  }

  /* Higlighted user */
  .messages_user {
    padding: 10px;
    text-align: center;
    border-bottom: 2px solid #9cb1c9;
    color: #51153b;
  }
  .no_conv {
    font-size: 20px;
    color: black;
    padding: 1rem;
    text-align: center;
    color: grey;
  }

  /* Message Form */
  .message_form {
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #86a6c6;
  }
  .message_form input {
    width: 40vw;
    margin: 0px 10px 10px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    /* border-bottom: black; */
    border: none;
  }
  .message_form .btn {
    margin-left: 11rem !important;
  }

  /* previous Message */
  .messages {
    height: calc(100vh - 200px);
    overflow-y: auto;
    border-bottom: 1px solid var red;
  }

  .message_wrapper {
    margin-top: 5px;
    padding: 0px 5px;
  }
  .message_wrapper img {
    width: 100%;
    border-radius: 5px;
  }
  .message_wrapper p {
    padding: 10px;
    display: inline-block;
    max-width: 50%;
    text-align: left;
    border-radius: 5px;
  }
  .message_wrapper small {
    display: inline-block;
    margin-top: 15px;
    opacity: 0.8;
  }
  .message_wrapper.own {
    text-align: right;
  }
  .me {
    background: blue;
    color: white;
  }
  .friend {
    background: green;
    color: white;
  }

  .showPerPage {
    margin-left: 15rem;
    margin-bottom: -2rem;
  }

  /* Pagination DropDown */
  /* Dropdown Button */
  .dropbtn {
    background-color: #3498db;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    /* margin-left: 20rem; */
  }

  /* Dropdown button on hover & focus */
  .dropbtn:hover,
  .dropbtn:focus {
    background-color: #2980b9;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
  .show {
    display: block;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
