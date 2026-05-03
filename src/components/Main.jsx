import Column from "./Column.jsx";

function Main() {
  
  return (
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column status = "Без статуса" />
              <Column status = "Нужно сделать"/>
              <Column status = "В работе"/>
              <Column status = "Тестирование"/>
              <Column status = "Готово"/>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Main;
