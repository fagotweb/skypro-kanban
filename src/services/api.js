import axios from "axios";

function handleError(error) {
  if (error.response) {
    const status = error.response.status;
    const serverMessage = error.response.data?.message;
    
    if (status === 401) {
      return Promise.reject(new Error("Вы не авторизованы. Войдите в аккаунт заново."));
    }        
    if (status >= 500) {
      return Promise.reject(new Error("Сервер временно недоступен. Попробуйте позже."));
    }        
    return Promise.reject(new Error(serverMessage || "Произошла ошибка при обработке запроса."));
  }   
  return Promise.reject(new Error("Не удалось связаться с сервером. Проверьте подключение."));
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
    return handleError(error);
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
    return handleError(error);
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
    return handleError(error);
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
    return handleError(error);
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
    return handleError(error);
  }
}
