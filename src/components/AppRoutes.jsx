import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Global.styled.js";
import { SWrapper } from "./Main.styled.js";
import MainPage from "../pages/MainPage.jsx";
import SignInPage from "../pages/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import PopExitPage from "../pages/PopExitPage.jsx";
import PopBrowsePage from "../pages/PopBrowsePage.jsx";
import PopNewCardPage from "../pages/PopNewCardPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function AppRoutes() {  
  const { user } = useAuth();
  
  return (
    <SWrapper>
      <GlobalStyles />
      <Routes>
        <Route element={<PrivateRoute isAuth={!!user} />}>
          <Route path="/" element={<MainPage />}>
            <Route path="exit" element={<PopExitPage />} />
            <Route path="card/:id" element={<PopBrowsePage />} />
            <Route path="card/add" element={<PopNewCardPage />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SWrapper>
  );
}

export default AppRoutes;
