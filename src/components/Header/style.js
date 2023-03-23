import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;

  .title {
    display: flex;
    align-items: center;

    .logo {
      width: 32px;
      height: 32px;

      img {
        display: block;
        width: 100%;
      }
    }

    h1 {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .options {
    select {
      width: 60px;
      & + select {
        margin-left: 10px;
      }
    }
  }
`;
