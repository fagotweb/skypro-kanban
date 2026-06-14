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

  const { user } = useAuth();
  const token = user?.token;

  const getWordsList = useCallback(async () => {
    if (!token) return;

    setTasksLoading(true);

    const data = await fetchWords({ token });
    if (data) setTasks(data);

    setTasksLoading(false);
  }, [token]);

  useEffect(() => {
    getWordsList();
  }, [getWordsList]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksLoading,
        getWordsList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export default TaskContext;
