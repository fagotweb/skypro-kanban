import Column from "./Column.jsx";
import { Container } from "./Header.styled.js";
import { EmptyMessage, ErrorBlock, ErrorButton, MainBlock, MainContent, SMain } from "./Main.styled.js";
import Header from "./Header.jsx";
import { useTasks } from "../context/TaskContext.jsx";
import Loader from "./Loader.jsx";

function Main() {
  const { tasks, tasksLoading, error, getWordsList } = useTasks();

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  
  return (
    <>
      <Header />
      <SMain>
        <Container>
          <MainBlock>
            {tasksLoading ? (
              <Loader />
            ) : (
            <MainContent>
              {error && ( 
                <ErrorBlock> 
                  <h3>Загрузка не удалась</h3> 
                  <p>{error}</p> 
                  <ErrorButton onClick={getWordsList}> 
                    Попробовать снова 
                  </ErrorButton> 
                </ErrorBlock> 
              )}
              {!error && statuses.map((status) => { 
                const filteredCards = tasks.filter( 
                  (task) => task.status === status, 
                ); 
                return ( 
                  <Column key={status} status={status} cards={filteredCards} getWords={getWordsList} /> 
                ); 
              })}
              {!error && tasks.length === 0 && ( 
                <EmptyMessage>Список задач пуст</EmptyMessage> 
              )} 
            </MainContent>
            )}
          </MainBlock>
        </Container>
      </SMain>
    </>
  );
}

export default Main;
