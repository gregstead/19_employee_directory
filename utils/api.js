import axios from "axios";

// Export and object containing API methods
export default {
  getRandomEmployee: function () {
    return axios.get("https://randomuser.me/api/");
  },
  getRandomEmployees: async function () {
    let employees = [];
    for (let i = 0; i < 10; i++) {
      const employee = await this.getRandomEmployee();
      employees.push(employee);
    }
    return employees;
  },
};
