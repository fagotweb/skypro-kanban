import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

function handleAuthError(error, type) {
  if (error.response) {
    if (error.response.status === 400) {
      if (type === "signin") {
        throw new Error("Неверный логин или пароль");
      }
      if (type === "signup") {
        throw new Error("Пользователь с таким логином уже существует");
      }
    }
    throw new Error(`Ошибка сервера`);
  } else {
    throw new Error("Произошла непредвиденная ошибка");
  }
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
    handleAuthError(error, "signUp");
  }
}
