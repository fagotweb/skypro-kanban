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
  ModalTitle,
  InputGroup,
  FormError,
} from "./SignIn.styled";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

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
    setError(null);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.name.trim() ||
      !formData.login.trim() ||
      !formData.password.trim()
    ) {
      setError({
        type: "empty",
         message: "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.",
    });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.login.trim())) {
      setError({
        type: "email",
         message: "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.",
    });
      return;
    }

    try {
      setIsLoading(true);
      await registerUser({
        name: formData.name.trim(),
        login: formData.login.trim(),
        password: formData.password,
      });
      navigate("/sign-in");
    } catch (err) {
      setError(err.message);
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
            <SignInLogin id="formLogUp" onSubmit={handleRegister}>
              <ModalTitle>
                <h2>Регистрация</h2>
              </ModalTitle>
              <InputGroup>
                <SignInInput
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  $hasError={error?.type === "empty" && !formData.name.trim()}
                />
                <SignInInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                  $hasError={error?.type === "email" || (error?.type === "empty" && !formData.login.trim())}
                />
                <SignInInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  $hasError={error?.type === "password" || (error?.type === "empty" && !formData.password.trim())}
                />
              </InputGroup>
              {error && <FormError>{error.message}</FormError>}
              <SignInEnter id="SignUpEnter" type="submit" disabled={isButtonDisabled}>
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
