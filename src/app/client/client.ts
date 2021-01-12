import axios, { AxiosInstance } from 'axios';

class Client {
  private static instance: AxiosInstance;

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = axios.create({
      baseURL: 'https://react-my-burger-c7b32-default-rtdb.firebaseio.com/',
    });
  }
}
