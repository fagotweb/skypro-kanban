import Column from "./Column.jsx";
import { statuses } from "./data.js";
import { Container } from "./Header.styled.js";
import { MainBlock, MainContent, SMain } from "./Main.styled.js";
import Header from "./Header.jsx";


function Main() { 
  return (
    <>
    <Header />
    <SMain>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => (
              <Column key={status} status={status} />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </SMain>
    </>
  );
}

export default Main;
