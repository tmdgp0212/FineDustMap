import styled from "styled-components";

export const DustCard = styled.div`
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  background-color: var(--${({ grade }) => grade}-light);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  cursor: default;

  .location {
    display: flex;
    align-items: baseline;
    gap: 5px;

    h2 {
      font-size: 18px;
      font-weight: 600;
    }

    span {
      font-size: 14px;
    }
  }

  .result {
    padding: 8px;
    text-align: center;
    font-size: 14px;

    .grade {
      margin: 8px auto;
      padding: 12px;
      width: 50%;
      color: var(--${({ grade }) => grade});
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 5px;
    }
  }

  .data-time {
    color: #333;
    text-align: right;
    font-size: 12px;
  }
`;
