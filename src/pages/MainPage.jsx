import Loader from "../components/Loader.jsx";
import Main from "../components/Main.jsx";
import { Outlet } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx"; 

function MainPage() { 
  const { tasks, tasksLoading } = useTasks();
  
  if (tasksLoading && tasks.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}

export default MainPage;