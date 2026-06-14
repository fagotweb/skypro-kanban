import { useAuth } from "../context/AuthContext";
import { PopUserSet } from "./PopUser.styled";
import { Link } from "react-router-dom";

function PopUser() {
  const { user } = useAuth();
  return (
    <PopUserSet id="userSetTtarget">
      <p>{user?.name || "Гость"}</p>
      <p>{user?.email || user?.login || "Войдите в профиль"}</p>
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
