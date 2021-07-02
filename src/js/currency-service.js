export default class currencyService {  
  static async getCurreny() { 
    try { 
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response.json);
      return response.json();
      
    } catch(error) {
      return error.message;
    }
  }
}