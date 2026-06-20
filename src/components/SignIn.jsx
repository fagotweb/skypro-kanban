import { useState } from "react";
import {
  FormError,
  InputGroup,
  ModalTitle,
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
import { useAuth } from "../context/AuthContext";

function SignIn({ isSignUp }) {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.login.trim() || !formData.password.trim()) {
      setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
      return;
    }

    try {
      setIsLoading(true);
      await loginUser(formData);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error(err.cause);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = isLoading || !!error;

  return (
    <SSignIn>
      <SignInCont>
        <SignInModal>
          <SignInBlock>
            <SignInLogin id="formLogIn" onSubmit={handleLogin}>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>            
              <InputGroup>
                <SignInInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                  $hasError={error && !formData.login.trim()}
                />
                <SignInInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  $hasError={error && !formData.password.trim()} 
                />
              </InputGroup>
              {error && <FormError>{error}</FormError>}
              <SignInEnter
                id="btnEnter"
                type="submit"
                disabled={isButtonDisabled}
                className="button-enter"
              >
                {isLoading
                  ? "Загрузка..."
                  : isSignUp
                    ? "Зарегистрироваться"
                    : "Войти"}
              </SignInEnter>
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
