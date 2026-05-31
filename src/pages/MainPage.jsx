import Loader from "../components/Loader.jsx";
import Main from "../components/Main.jsx";
import { Outlet } from "react-router-dom";
import { fetchWords } from "../services/api.js";
import { useCallback, useEffect, useState } from "react";

function MainPage() {
  const [loading, setLoading] = useState(false);
  const [tasks, setWords] = useState([]);
  const [error, setError] = useState("");
  const getWords = useCallback(async () => {
    const savedUserStr = localStorage.getItem("userInfo");

    try {
      setLoading(true);
      const userObj = JSON.parse(savedUserStr);
      const token = userObj.token;
      if (!token) {
        setError("Токен авторизации отсутствует");
        return;
      }
      const data = await fetchWords({ token });
      if (data) setWords(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const startFetching = async () => {
      await getWords();
    };
    startFetching();
  }, [getWords]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Main
        error={error}
        getWords={getWords}
        loading={loading}
        tasks={tasks}
        error={error}
      />
      <Outlet context={{ tasks }} />
    </>
  );
}

export default MainPage;
