import Column from "./Column.jsx";
import { Container } from "./Header.styled.js";
import { MainBlock, MainContent, SMain } from "./Main.styled.js";
import Header from "./Header.jsx";
import { useMemo } from "react";

function Main({ error, tasks = [], getWords }) {
  const dynamicStatuses = useMemo(() => {
    if (!Array.isArray(tasks)) return [];

    const allStatuses = tasks.map((task) => task.status).filter(Boolean);
    return [...new Set(allStatuses)];
  }, [tasks]);

  return (
    <>
      <Header />
      <SMain>
        <Container>
          <MainBlock>
            <MainContent>
              {error && (
                <div
                  style={{
                    width: "100%",
                    padding: "20px",
                    backgroundColor: "#ffebee",
                    color: "#c92a2a",
                    borderRadius: "8px",
                    border: "1px solid #ffc9c9",
                    textAlign: "center",
                    marginBottom: "20px",
                    gridColumn: "1 / -1",
                  }}
                >
                  <h3>Загрузка не удалась</h3>
                  <p>{error}</p>
                  <button
                    onClick={getWords}
                    style={{
                      marginTop: "10px",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    Попробовать снова
                  </button>
                </div>
              )}
              {!error && dynamicStatuses.length === 0 && (
                <p style={{ textAlign: "center", width: "100%" }}>
                  Список задач пуст
                </p>
              )}
              {!error &&
                dynamicStatuses.map((status) => {
                  const filteredCards = tasks.filter(
                    (task) => task.status === status,
                  );
                  return (
                    <Column
                      key={status}
                      status={status}
                      cards={filteredCards}
                      getWords={getWords}
                    />
                  );
                })}
            </MainContent>
          </MainBlock>
        </Container>
      </SMain>
    </>
  );
}

export default Main;
