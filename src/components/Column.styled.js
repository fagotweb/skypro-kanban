import styled from "styled-components";

export const SColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  > div:first-of-type {
    padding: 0 10px;
    margin: 15px 0;

    p {
      color: #94a6be;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
    }
  }

  > div:nth-of-type(2) {
    width: 100%;
    display: block;
    position: relative;

    @media screen and (max-width: 1200px) {
      width: 100%;
      display: flex;
      overflow-y: auto;
    }
  }
`;
