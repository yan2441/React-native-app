import apiClient from "./client";

const register = pushToken => apiClient.post('/expoPushToken', { token: pushToken })

export default {
  register,
}