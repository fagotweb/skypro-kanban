import Calendar from "./Calendar.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useTasks } from "../context/TaskContext.jsx";
import { editWord, deleteWord } from "../services/api.js";

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const { tasks, getWordsList } = useTasks();

  const [isEditMode, setIsEditMode] = useState(false);

  const card = useMemo(() => {
    return (
      tasks.find((c) => c._id === id) || {
        title: "",
        topic: "",
        status: "Без статуса",
        description: "",
        date: "",
      }
    );
  }, [id, tasks]);

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Без статуса");
  const [topic, setTopic] = useState("Web Design");

  useEffect(() => {
    if (card) {
      setDescription(card.description || "");
      setStatus(card.status || "Без статуса");
      setTopic(card.topic || "Web Design");
    }
  }, [card]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedCard = {
        title: card.title,
        topic: topic,
        status: status,
        description: description,
        date: card.date,
      };

      await editWord({ token: user?.token, id, word: updatedCard });
      await getWordsList(); 
      navigate("/");
    } catch (err) {
      alert("Не удалось сохранить изменения: " + err.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("Вы уверены, что хотите удалить эту задачу?")) return;

    try {
      await deleteWord({ token: user?.token, id });
      await getWordsList(); 
      navigate("/"); 
    } catch (err) {
      alert("Не удалось удалить задачу: " + err.message);
    }
  };

  const statusOptions = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  const categoryOptions = ["Web Design", "Research", "Copywriting"];

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {isEditMode ? (
                  statusOptions.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => setStatus(opt)}
                      className={`status__theme _gray ${status === opt ? "_active-status" : ""}`}
                      style={{
                        cursor: "pointer",
                        border: status === opt ? "1px solid #565EEF" : "none",
                      }}
                    >
                      <p className="_gray">{opt}</p>
                    </div>
                  ))
                ) : (
                  <div className="status__theme _gray">
                    <p className="_gray">{status}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    readOnly={!isEditMode} 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {isEditMode ? (
                  categoryOptions.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => setTopic(opt)}
                      className={`categories__theme _orange ${topic === opt ? "_active-category" : ""}`}
                      style={{ cursor: "pointer" }}
                    >
                      <p className="_orange">{opt}</p>
                    </div>
                  ))
                ) : (
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">{topic}</p>
                  </div>
                )}
              </div>
            </div>
            {!isEditMode && (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button
                    type="button"
                    onClick={() => setIsEditMode(true)}
                    className="btn-browse__edit _btn-bor _hover03"
                  >
                    Редактировать задачу
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn-browse__delete _btn-bor _hover03"
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-browse__close _btn-bg _hover01"
                >
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            )}
            {isEditMode && (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="btn-edit__edit _btn-bg _hover01"
                  >
                    Сохранить
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditMode(false)}
                    className="btn-edit__edit _btn-bor _hover03"
                  >
                    Отменить
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-edit__close _btn-bg _hover01"
                >
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
