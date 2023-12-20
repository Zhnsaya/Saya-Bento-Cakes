import axios from "axios";

export default class APIService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=cake"
      );

      if (response.status === 200) {
        const { meals } = response.data;
        return meals;
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }

  static async getMealDetails(id) {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (response.status === 200) {
        const [mealDetails] = response.data.meals;
        return mealDetails;
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
}
