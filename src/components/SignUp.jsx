import { useState } from "react";
import {
  SignInCont,
  SignInEnter,
  SignInGroup,
  SignInInput,
  SignInLogin,
  SignInBlock,
  SignInModal,
  SSignIn,
} from "./SignIn.styled";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.name.trim() ||
      !formData.login.trim() ||
      !formData.password.trim()
    ) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    try {
      setIsLoading(true);
      await signUp(formData);
      navigate("/sign-in");
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
              <h2>Регистрация</h2>
            </div>
            <SignInLogin id="formLogUp" action="#" onSubmit={handleRegister}>
              <SignInInput
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
              />
              <SignInInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <SignInInput
                type="password"
                name="password"
                id="passwordFirst"
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
              <SignInEnter id="SignUpEnter" type="submit" disabled={isLoading}>
                {isLoading ? "Создание аккаунта..." : "Зарегистрироваться"}
              </SignInEnter>
              <SignInGroup>
                <p>
                  Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                </p>
              </SignInGroup>
            </SignInLogin>
          </SignInBlock>
        </SignInModal>
      </SignInCont>
    </SSignIn>
  );
}

export default SignUp;
