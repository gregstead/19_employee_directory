import axios from "axios";

// Export and object containing API methods
export default {
  getRandomEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};
