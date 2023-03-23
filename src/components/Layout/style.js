import styled from "styled-components";

export const Layout = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 640px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);

  @media (max-width: 420px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
  }

  @media (min-width: 420px) and (max-height: 660px) {
    height: 90vh;
    min-height: 420px;
  }
`;
