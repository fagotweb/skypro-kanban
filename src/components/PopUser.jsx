import { PopUserSet } from "./PopUser.styled";
import { Link } from 'react-router-dom';

function PopUser() {
  return (
    <PopUserSet      
      id="userSetTtarget"
    >
      <a href="">x</a>
      <p>Ivan Ivanov</p>
      <p>ivan.ivanov@gmail.com</p>
      <div>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox"></input>
      </div>
      <button type="button">
        <Link to="exit">Выйти</Link>
      </button>
    </PopUserSet>
  );
}

export default PopUser;
