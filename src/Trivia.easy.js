export default class TriviaEasy {  
  static getTriviaEasy() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const easyUrl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", easyUrl, true);
      request.send();
    });
  }
}