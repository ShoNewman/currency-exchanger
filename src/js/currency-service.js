export default class currencyService {
  static async getCurreny(location, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${location}/${amount}`);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();

    } catch (error) {
      return error.message;
    }
  }

  static async getCodes() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response.json);
      return response.json();

    } catch (error) {
      return error.message;
    }
  }
}

