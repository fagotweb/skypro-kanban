import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Global.styled.js";

import { useEffect, useState } from "react";
import { SWrapper } from "./Main.styled.js";
import MainPage from "../pages/MainPage.jsx";
import SignInPage from "../pages/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import PopExitPage from "../pages/PopExitPage.jsx";
import PopBrowsePage from "../pages/PopBrowsePage.jsx";
import PopNewCardPage from "../pages/PopNewCardPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SWrapper>
      <GlobalStyles />
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage loading={loading} />}>
            <Route
              path="exit"
              element={<PopExitPage setIsAuth={setIsAuth} />}
            />
            <Route path="card/:id" element={<PopBrowsePage />} />
            <Route path="card/add" element={<PopNewCardPage />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      //{" "}
    </SWrapper>
  );
}

export default AppRoutes;
