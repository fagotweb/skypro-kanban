import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "./AuthContext.jsx";
import { fetchWords } from "../services/api.js";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuth();
  const token = user?.token;

  const getWordsList = useCallback(async () => {
    if (!token) return;

    setTasksLoading(true);
    setError(null);

    try {
      const data = await fetchWords({ token });      
      if (data) {
        setTasks(data);
      } else {        
        throw new Error("Не удалось загрузить данные с сервера");
      }
    } catch (err) {
      setError(err.message || "Произошла непредвиденная ошибка");
    } finally {
      setTasksLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getWordsList();
  }, [getWordsList]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksLoading,
         error,
        setError,
        getWordsList,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

