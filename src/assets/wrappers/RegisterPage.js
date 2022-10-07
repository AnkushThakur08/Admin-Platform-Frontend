import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }

  .socialButton {
    border: none;
    background-color: white;
    padding-right: 4rem;
    padding-left: 4rem;
    cursor: pointer;
  }

  .socialButtonWrapper {
    text-align: center;
  }

  .form {
    max-width: 700px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: left;
    padding: 1rem;
  }

  span {
    margin-left: 11.5rem;
  }

  .btn {
    margin-top: 1rem;
    text-align: center;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .otp {
    text-align: center !important;
  }

  /* Verify Page */
  .centerinVerifyPage {
    margin-left: 3rem;
  }
  .smallVerifyImage {
    width: 250px;
  }

  .smallforgetPassword {
    width: 350px;
    margin-right: -5rem;
  }

  .smallVerifyImage {
    width: 350px;
  }
  .title {
    margin-top: -2rem;
  }

  .forgetPassword {
    margin-left: 18rem;
  }

  .Oroption {
    text-align: center;
    padding-top: 1rem;
  }
`;
export default Wrapper;
