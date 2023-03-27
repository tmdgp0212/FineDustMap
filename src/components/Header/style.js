import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;

  .title {
    display: flex;
    align-items: center;

    .logo {
      width: 32px;
      height: 32px;

      @media (max-width: 300px) {
        width: 26px;
        height: 26px;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    h1 {
      font-size: 16px;
      font-weight: 600;

      @media (max-width: 300px) {
        display: none;
      }
    }
  }
`;

export const SelectCity = styled.select`
  padding: 2px 4px;
  width: 60px;
  border: none;
  outline: none;
  /* border-bottom: 1px solid #333; */
`;

export const CelectyDist = styled(SelectCity)`
  margin-left: 10px;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
