import Column from "./Column.jsx";

function Main() {
  return (
      <main class="main">
        <div class="container">
          <div class="main__block">
            <div class="main__content">
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
            </div>
          </div>
        </div>
      </main>
  );
}

export default Main;
