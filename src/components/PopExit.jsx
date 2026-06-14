import { Link, useNavigate } from "react-router-dom";
import {
  ExitBlock,
  ExitContainer,
  ExitTtl,
  SPopExit,
  ExitForm,
} from "./PopExit.js";
import { useAuth } from "../context/AuthContext.jsx";

function PopExit() {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  function handleLogout(e) {
    e.preventDefault();
    logoutUser();
    navigate("/sign-in");
  }
  return (
    <SPopExit id="popExit">
      <ExitContainer>
        <ExitBlock>
          <ExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </ExitTtl>
          <form id="formExit" action="#">
            <ExitForm>
              <button
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                onClick={handleLogout}
                type="tertiary"
              >
                Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to="/">Нет, остаться</Link>{" "}
              </button>
            </ExitForm>
          </form>
        </ExitBlock>
      </ExitContainer>
    </SPopExit>
  );
}

export default PopExit;
