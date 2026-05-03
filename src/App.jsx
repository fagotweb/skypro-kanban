import "./App.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import PopBrowse from "./components/PopBrowse.jsx";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

  return (
    <div className="wrapper">
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <PopBrowse />
      <Header />
      {Loading ? (<Loader />) : (<Main />)}
    </div>
  );
}

export default App;
