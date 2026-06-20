import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  .theme-top {
    display: block;
    @media screen and (max-width: 495px) {
      display: none;
    }
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
      display: block;
    }
  }
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const StatusBlock = styled.div`
  margin-bottom: 11px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusThemeItem = styled.div`
  border-radius: 24px;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: ${(props) => (props.$isActive ? "#D4DBE5" : "transparent")};
  border: 0.7px solid
    ${(props) => (props.$isActive ? "#D4DBE5" : "rgba(148, 166, 190, 0.4)")};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    color: ${(props) => (props.$isActive ? "#fff" : "#94a6be")};
    font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  }

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#D4DBE5" : "#eaeef6")};
  }
`;

export const BrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const FormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const CategoriesBlock = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoryThemeItem = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => (props.$active ? "1" : "0.4")};
  background-color: ${(props) =>
    props.$topic === "Web Design"
      ? "#FFE4C4"
      : props.$topic === "Research"
        ? "#D1EEEE"
        : "#E6E6FA"};

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${(props) =>
      props.$topic === "Web Design"
        ? "#FF8C00"
        : props.$topic === "Research"
          ? "#008080"
          : "#6A5ACD"};
  }
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    cursor: pointer;

    @media screen and (max-width: 495px) {
      width: 100%;
      height: 40px;
    }
  }

  .btn-group {
    display: flex;
    @media screen and (max-width: 495px) {
      width: 100%;
      flex-direction: column;
    }

    button {
      margin-right: 8px;
      @media screen and (max-width: 495px) {
        margin-right: 0;
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  background: ${(props) =>
    props.$variant === "bg" ? "#565eef" : "transparent"};
  color: ${(props) => (props.$variant === "bg" ? "#ffffff" : "#565eef")};
  border: ${(props) =>
    props.$variant === "bor" ? "0.7px solid #565eef" : "none"};

  a {
    color: inherit;
    text-decoration: none;
  }
`;
