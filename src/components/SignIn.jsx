import { useState } from "react";
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
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.login.trim() || !formData.password.trim()) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    try {
      setIsLoading(true);
      await loginUser(formData);      
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SSignIn>
      <SignInCont>
        <SignInModal>
          <SignInBlock>
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <SignInLogin id="formLogIn" action="#" onSubmit={handleLogin}>
              <SignInInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <SignInInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              {error && (
                <div
                  style={{
                    color: "#c92a2a",
                    fontSize: "14px",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}
              <SignInEnter
                id="btnEnter"
                type="submit"
                disabled={isLoading}
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
