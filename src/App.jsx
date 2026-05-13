import "./App.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import PopBrowse from "./components/PopBrowse.jsx";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";
import { SWrapper } from "./components/Main.styled.js";
import { ExitBlock, ExitContainer, ExitTtl, SPopExit, ExitForm } from "./components/PopExit.js";

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

  return (
    <SWrapper>
      <SPopExit id="popExit">
        <ExitContainer>
          <ExitBlock>
            <ExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </ExitTtl>
            <form id="formExit" action="#">
              <ExitForm>
                <button className="pop-exit__exit-yes _hover01" id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </button>
              </ExitForm>
            </form>
          </ExitBlock>
        </ExitContainer>
      </SPopExit>
      
      <PopBrowse />
      <Header />
      {Loading ? (<Loader />) : (<Main />)}
    </SWrapper>
  );
}

export default App;
