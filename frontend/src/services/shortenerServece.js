import baseAPI from "./api";

class ShortenerService {
  constructor() {
    this.api = baseAPI('http://localhost:3001/');
  }
}