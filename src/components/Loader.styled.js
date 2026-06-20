import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const SkeletonLine = styled.div`
  height: ${props => props.$height || "12px"};
  width: ${props => props.$width || "100%"};
  border-radius: ${props => props.$radius || "4px"};
  
  background: linear-gradient(90deg, #f0f3f8 25%, #e1e7f0 50%, #f0f3f8 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export const SLoader = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {  
    display: block;
    gap: 0;
  }
`;

export const SkeletonColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const SkeletonTitleWrapper = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const SkeletonTitle = styled.div`
  width: 110px;
  height: 14px;
  background-color: #d4dbe5;
  border-radius: 4px;
`;

export const SkeletonCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SCardSkeleton = styled.div`
  padding: 5px;
  
  @media screen and (max-width: 1200px) {
    flex-shrink: 0;
  }
`;

export const SCardsSkeleton = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 13px 19px;
`;

export const SkeletonCardGroup = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkeletonCardContent = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;