import { 
  SLoader, 
  SkeletonColumn, 
  SkeletonTitleWrapper,
  SkeletonTitle, 
  SkeletonCardsContainer
} from "./Loader.styled.js";
import SkeletonCard from "./SkeletonCard.jsx";

function Loader() {
  const columns =[1,2,3,4,5];

  return (
    <SLoader>
      {columns.map((col) => {
        const cardCounts = { 1: 5, 2: 1, 3: 3, 4: 1, 5: 1 };
        const count = cardCounts[col] || 1;

        return (
          <SkeletonColumn key={col}>            
            <SkeletonTitleWrapper>
              <SkeletonTitle />
            </SkeletonTitleWrapper>            
            <SkeletonCardsContainer>
              {Array.from({ length: count }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </SkeletonCardsContainer>
          </SkeletonColumn>
        );
      })}
    </SLoader>
  );
}

export default Loader;