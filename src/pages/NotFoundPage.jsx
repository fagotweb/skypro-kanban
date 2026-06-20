import { Link } from "react-router-dom";
import {
  SignInBlock,
  SignInCont,
  SignInGroup,
  SignInModal,
  SSignIn,
  ModalTitle,
  SignInEnter
} from "../components/SignIn.styled.js"; // Переиспользуем готовые стили карточки

function NotFoundPage() {
  return (
    <SSignIn>
      <SignInCont>
        <SignInModal>
          <SignInBlock style={{ textAlign: "center" }}>
            
            {/* Заголовок в стиле Входа/Регистрации */}
            <ModalTitle>
              <h2>Упс! Ошибка 404</h2>
            </ModalTitle>
            
            {/* Описание ошибки */}
            <div style={{ margin: "20px 0", color: "#94a6be", fontSize: "15px", lineHeight: "150%" }}>
              <p>Похоже, такая страница не существует или была перемещена.</p>
            </div>

            {/* Ссылка на главную страницу в стиле нижних ссылок макета */}
            <SignInGroup>
              <SignInEnter as={Link} to="/">
                Вернуться на главную
              </SignInEnter>
            </SignInGroup>

          </SignInBlock>
        </SignInModal>
      </SignInCont>
    </SSignIn>
  );
}

export default NotFoundPage;