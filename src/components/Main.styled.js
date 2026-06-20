import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const ErrorBlock = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffebee;
  color: #c92a2a;
  border-radius: 8px;
  border: 1px solid #ffc9c9;
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #c92a2a;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b02525;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  color: #555;
  font-size: 16px;
`;
