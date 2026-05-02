// import { useState } from 'react'
import "./App.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import PopBrowse from "./components/PopBrowse.jsx";
import PopNewCard from "./components/PopNewCard.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div class="wrapper">
      <div class="pop-exit" id="popExit">
        <div class="pop-exit__container">
          <div class="pop-exit__block">
            <div class="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form class="pop-exit__form" id="formExit" action="#">
              <div class="pop-exit__form-group">
                <button class="pop-exit__exit-yes _hover01" id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </button>
                <button class="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
