import axios from "axios";

const apiMessages = axios.create({baseURL: 'https://607bad6567e6530017573358.mockapi.io/api/v1'})
  
export default apiMessages;