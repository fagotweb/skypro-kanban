import Calendar from "./Calendar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import { postWord } from "../services/api.js";
import { useAuth } from "../context/AuthContext.jsx";

function PopNewCard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getWordsList } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Введите название задачи");
      return;
    }

    try {
      const newTask = {
        title: title.trim(),
        topic: topic,
        status: "Без статуса",
        description: description.trim(),
        date: new Date().toISOString(),
      };

      await postWord({ token: user?.token, word: newTask });
      await getWordsList();

      navigate("/");
    } catch (err) {
      alert("Ошибка при сохранении задачи: " + err.message);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link className="pop-new-card__close" to="/">
              ✖
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  ></input>
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  onClick={() => setTopic("Web Design")}
                  className={`categories__theme _orange ${topic === "Web Design" ? "_active-category" : ""}`}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  onClick={() => setTopic("Research")}
                  className={`categories__theme _green ${topic === "Research" ? "_active-category" : ""}`}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  onClick={() => setTopic("Copywriting")}
                  className={`categories__theme _purple ${topic === "Copywriting" ? "_active-category" : ""}`}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              form="formNewCard"
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
