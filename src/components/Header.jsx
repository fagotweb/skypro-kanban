import { useState } from "react";
import PopUser from "./PopUser.jsx";
import PopNewCard from "./PopNewCard.jsx";
import { SHeader, HeaderBlock, LogoImg, HeaderUser, Container } from "./Header.styled.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <PopNewCard />
            <HeaderUser
              href="#userSetTtarget"              
              onClick={() => setIsOpen(!isOpen)}
            >
              Ivan Ivanov
            </HeaderUser>
            {isOpen && <PopUser />}
          </nav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
}

export default Header;
