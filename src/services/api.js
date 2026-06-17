import axios from "axios";

function handleError(error) {
  if (error.response) {
    if (error.response.status === 401) {
      throw new Error("Нет авторизованы.");
    }
    if (error.response.status === 404) {
      throw new Error("Ресурс не найден.");
    }
    throw new Error(`Ошибка сервера`);
  } else {
    throw new Error("Произошла непредвиденная ошибка");
  }
}

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchWords({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (data.status === 200) {
      return data.data.tasks;
    }
  } catch (error) {
    handleError(error);
  }
}

export async function postWord({ token, word }) {
  try {
    const data = await axios.post(API_URL, word, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    if (data.status === 201) {
      return data.data.tasks;
    }
  } catch (error) {
    handleError(error);
  }
}

export async function editWord({ token, id, word }) {
  try {
    const data = await axios.put(`${API_URL}/${id}`, word, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    if (data.status === 201) {
      return data.data.tasks;
    }
  } catch (error) {
    handleError(error);
  }
}

export async function getWord({ token, id }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (data.status === 200) {
      return data.data.tasks;
    }
  } catch (error) {
    handleError(error);
  }
}

export async function deleteWord({ token, id }) {
  try {
    const data = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (data.status === 201) {
      return data.data.tasks;
    }
  } catch (error) {
    handleError(error);
  }
}
