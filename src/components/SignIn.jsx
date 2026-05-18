import {
  SignInBlock,
  SignInCont,
  SignInEnter,
  SignInGroup,
  SignInInput,
  SignInLogin,
  SignInModal,
  SSignIn,
} from "./SignIn.styled";
import { Link, useNavigate } from "react-router-dom";

function SignIn({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <SSignIn>
      <SignInCont>
        <SignInModal>
          <SignInBlock>
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <SignInLogin id="formLogIn" action="#">
              <SignInInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <SignInInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <SignInEnter
                id="btnEnter"
                onClick={handleLogin}
                type="secondary"
                //  $fullWidth={true}
                className="button-enter"
                text={isSignUp ? "Зарегистрироваться" : "Войти"}
              />
              <SignInGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/sign-up">Регистрируйтесь здесь</Link>
              </SignInGroup>
            </SignInLogin>
          </SignInBlock>
        </SignInModal>
      </SignInCont>
    </SSignIn>
  );
}

export default SignIn;
