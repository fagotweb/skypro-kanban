import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

function handleAuthError(error, type) {
  if (error.response) {
    const status = error.response.status;
    const serverMessage = error.response.data?.message;

    if (status === 400) {
      if (type === "signin") {
        return Promise.reject(new Error("Неверный логин или пароль"));
      }
      if (type === "signup") {
        return Promise.reject(new Error("Пользователь с таким логином уже существует"));
      }
    }
    if (status >= 500) {
      return Promise.reject(new Error("Сервер авторизации временно недоступен. Попробуйте позже."));
    }
    return Promise.reject(new Error(serverMessage || "Произошла ошибка при авторизации."));
  }
  return Promise.reject(new Error("Не удалось связаться с сервером. Проверьте интернет-соединение."));
}

export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL + "/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    if (data.status === 201) {
      return data.data.user;
    }
  } catch (error) {
    handleAuthError(error, "signin");
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      },
    );
    if (data.status === 201) {
      return data.data.user;
    }
  } catch (error) {
    console.log(error);
    handleAuthError(error, "signup");
  }
}
