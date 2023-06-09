import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 65px;
  background-color: #fff;
  /* border-radius: 15px 15px 0 0; */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    transition: all 0.2s;

    &.active {
      height: 70px;
      background-color: #fff;
      border-radius: 10px 10px 0 0;
      transform: translateY(-5px);
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    }

    & + a {
      border-left: 1px solid var(--gray-light);
    }

    &:hover {
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    }

    svg {
      width: 22px;
      height: 22px;
      padding: 5px 0 2px;
      color: var(--blue-light);
    }

    span {
      font-size: 12px;
    }
  }
`;
