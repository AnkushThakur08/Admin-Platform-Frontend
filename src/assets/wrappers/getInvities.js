import styled from "styled-components";

const Wrapper1 = styled.div`
  padding: 2rem;
  background: #f2f2f2;
  border-radius: var(--borderRadius);

  margin: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    display: block;
    font-weight: 700;
    font-size: 20px;
    color: #02b290;
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
    color: "#02b290";
  }

  .icon {
    width: 60px;
    height: 40px;
    color: #02b290;
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
      color: #e7f0fe;
    }
  }

  .red {
    width: 60px;
    height: 45px;
    color: #b4161b;
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .countRed {
    display: block;
    font-weight: 700;
    font-size: 20px;
    color: #b4161b;
  }

  .titleRed {
    color: #b4161b;
    font-weight: 600;
  }

  .titleGreen {
    color: #02b290;
    font-weight: 600;
    font-size: 15px;

  }
`;

export default Wrapper1;
