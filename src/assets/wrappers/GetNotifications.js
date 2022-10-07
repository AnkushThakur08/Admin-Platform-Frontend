import styled from "styled-components";

const Wrapper1 = styled.div`
  padding: 2rem;
  background: #f2f2f2;
  /* background: #cad5e2; */
  border-radius: var(--borderRadius);
  border-bottom: 5px solid #35bdd0;
  margin: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    display: block;
    font-weight: 600;
    font-size: 20px;
    color: #6a1b4d;
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
    color: "#8D3DAF";
  }

  .icon {
    width: 60px;
    height: 40px;
    color: #35bdd0;
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
      color: #e7f0fe;
    }
  }
`;

export default Wrapper1;
