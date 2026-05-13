import { PopUserSet } from "./PopUser.styled";

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
        <a href="#popExit">Выйти</a>
      </button>
    </PopUserSet>
  );
}

export default PopUser;
