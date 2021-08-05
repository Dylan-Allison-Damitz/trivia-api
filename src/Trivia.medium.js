export default class TriviaMedium {  
  static getTriviaMedium() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const mediumUrl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", mediumUrl, true);
      request.send();
    });
  }
}