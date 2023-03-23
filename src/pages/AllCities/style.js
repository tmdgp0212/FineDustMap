import styled from "styled-components";

export const AllCities = styled.div`
  overflow-y: auto;
  height: inherit;

  &::-webkit-scrollbar {
    width: 3px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 25px;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
