import { useState } from "react";
import PopUser from "./PopUser.jsx";
import {
  SHeader,
  HeaderBlock,
  LogoImg,
  HeaderUser,
  Container,
} from "./Header.styled.js";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <LogoImg className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </LogoImg>
          <LogoImg className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </LogoImg>
          <nav>
            <button id="btnMainNew">
              <Link to="card/add">Создать новую задачу</Link>
            </button>
            <HeaderUser
              href="#userSetTtarget"
              onClick={() => setIsOpen(!isOpen)}
            >
              {user.name}
            </HeaderUser>
            {isOpen && <PopUser />}
          </nav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
}

export default Header;
