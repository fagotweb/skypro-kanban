import Loader from "../components/Loader.jsx";
import Main from "../components/Main.jsx";
import { Outlet } from "react-router-dom";

function MainPage({loading}) {
  if (loading) {
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
