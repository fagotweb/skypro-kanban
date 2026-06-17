import * as S from "./PopBrowse.styles.js";
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
  const { tasks, setTasks } = useTasks();

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
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (card) {
      setDescription(card.description || "");
      setStatus(card.status || "Без статуса");
      setTopic(card.topic || "Web Design");
      setSelectedDate(card.date ? new Date(card.date) : new Date());
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
        date: selectedDate.toISOString(),
      };

      const updatedTasksList = await editWord({
        token: user?.token,
        id,
        word: updatedCard,
      });

      setTasks(updatedTasksList);

      setIsEditMode(false);
      navigate("/");
    } catch (err) {
      alert("Не удалось сохранить изменения: " + err.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("Вы уверены, что хотите удалить эту задачу?")) return;

    try {
      const updatedTasksList = await deleteWord({ token: user?.token, id });

      setTasks(updatedTasksList);

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
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.TopBlock>
              <S.Title>{card.title}</S.Title>
              <S.CategoryThemeItem
                className="theme-top"
                $active={true}
                $topic={topic}
              >
                <p>{topic}</p>
              </S.CategoryThemeItem>
            </S.TopBlock>

            <S.StatusBlock>
              <p className="status__p subttl">Статус</p>
              <S.StatusThemes>
                {isEditMode ? (
                  statusOptions.map((opt) => (
                    <S.StatusThemeItem
                      key={opt}
                      onClick={() => setStatus(opt)}
                      $isActive={status === opt}
                    >
                      <p>{opt}</p>
                    </S.StatusThemeItem>
                  ))
                ) : (
                  <S.StatusThemeItem style={{ cursor: "default" }}>
                    <p>{status}</p>
                  </S.StatusThemeItem>
                )}
              </S.StatusThemes>
            </S.StatusBlock>

            <S.BrowseWrap>
              <S.FormBrowse
                id="formBrowseCard"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.TextArea
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    readOnly={!isEditMode}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </S.FormBrowse>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                readOnly={!isEditMode}
              />
            </S.BrowseWrap>

            {/* Категория для мобильной верстки */}
            <S.CategoriesBlock className="theme-down">
              <p className="categories__p subttl">Категория</p>
              <S.CategoriesThemes>
                {isEditMode ? (
                  categoryOptions.map((opt) => (
                    <S.CategoryThemeItem
                      key={opt}
                      onClick={() => setTopic(opt)}
                      $active={topic === opt}
                      $topic={opt}
                      style={{ cursor: "pointer" }}
                    >
                      <p>{opt}</p>
                    </S.CategoryThemeItem>
                  ))
                ) : (
                  <S.CategoryThemeItem $active={true} $topic={topic}>
                    <p>{topic}</p>
                  </S.CategoryThemeItem>
                )}
              </S.CategoriesThemes>
            </S.CategoriesBlock>

            {/* Группы кнопок */}
            {!isEditMode ? (
              <S.ButtonGroupContainer>
                <div className="btn-group">
                  <S.ButtonStyled
                    type="button"
                    $variant="bor"
                    onClick={() => setIsEditMode(true)}
                  >
                    Редактировать задачу
                  </S.ButtonStyled>
                  <S.ButtonStyled
                    type="button"
                    $variant="bor"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </S.ButtonStyled>
                </div>
                <S.ButtonStyled type="button" $variant="bg">
                  <Link to="/">Закрыть</Link>
                </S.ButtonStyled>
              </S.ButtonGroupContainer>
            ) : (
              <S.ButtonGroupContainer>
                <div className="btn-group">
                  <S.ButtonStyled
                    type="button"
                    $variant="bg"
                    onClick={handleSave}
                  >
                    Сохранить
                  </S.ButtonStyled>
                  <S.ButtonStyled
                    type="button"
                    $variant="bor"
                    onClick={() => setIsEditMode(false)}
                  >
                    Отменить
                  </S.ButtonStyled>
                  <S.ButtonStyled
                    type="button"
                    $variant="bor"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </S.ButtonStyled>
                </div>
                <S.ButtonStyled type="button" $variant="bg">
                  <Link to="/">Закрыть</Link>
                </S.ButtonStyled>
              </S.ButtonGroupContainer>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
};

export default PopBrowse;
