import { Link, useNavigate } from 'react-router-dom';
import {
  ExitBlock,
  ExitContainer,
  ExitTtl,
  SPopExit,
  ExitForm,
} from "./PopExit.js";

function PopExit({setIsAuth}) {

  const navigate = useNavigate();

   function handleLogout(e) {
      e.preventDefault();
      setIsAuth(false);
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
                <button className="pop-exit__exit-yes _hover01" id="exitYes" onClick={handleLogout} type="tertiary" >  
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
