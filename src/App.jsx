import "./App.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import PopBrowse from "./components/PopBrowse.jsx";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";
import { SWrapper } from "./components/Main.styled.js";
import {
  ExitBlock,
  ExitContainer,
  ExitTtl,
  SPopExit,
  ExitForm,
} from "./components/PopExit.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *:before,
    *:after {
      box-sizing: border-box;
    }

    a,
    a:visited {
      text-decoration: none;
      cursor: pointer;
    }

    button,
    ._btn {
      cursor: pointer;
      outline: none;
    }

    ul li {
      list-style: none;
    }

    @keyframes card-animation {
      0% {
        height: 0;
        opacity: 0;
      }
      100% {
        height: auto;
        opacity: 1;
      }
    }
    html,
    body {
      width: 100%;
      height: 100%;
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      color: #000000;
    }
`;

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <SWrapper>
      <GlobalStyles />
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
      {Loading ? <Loader /> : <Main />}
    </SWrapper>
  );
}

export default App;
