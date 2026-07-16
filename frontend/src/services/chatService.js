import api from "./api";

export const sendMessage = async (message) => {
  try {
    const { data } = await api.post("/chat", {
      message,
    });

    return data.response;
  } catch (error) {
    console.error("Chat Service Error:", error);
    throw error;
  }
};