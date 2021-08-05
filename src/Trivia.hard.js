export default class Trivia {  
  static getTriviaHard() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const hardUrl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=hard`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", hardUrl, true);
      request.send();
    });
  }
}