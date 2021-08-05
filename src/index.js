import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TriviaEasy from './Trivia.easy.js';
import TriviaMedium from './Trivia.medium.js';
import TriviaHard from './Trivia.hard.js';

$('#question').click(function () {
  let promiseEasy = TriviaEasy.getTriviaEasy();
  promiseEasy.then(function (response) {
    const body = JSON.parse(response);
    $('.showQuestion').html(body.results[0].question);
    $('.showAnswers').hide();
    $('.showAnswers').html(body.results[0].correct_answer);

  }, function (error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });

  $('#answers').click(function () {
    $('.showAnswers').show();
  });

  let promiseMedium = TriviaMedium.getTriviaMedium();
  promiseMedium.then(function (response) {
    const body = JSON.parse(response);
    $('.showQuestion').html(body.results[0].question);
    $('.showAnswers').hide();
    $('.showAnswers').html(body.results[0].correct_answer);

  }, function (error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });

  $('#answers').click(function () {
    $('.showAnswers').show();
  });

  let promiseHard = TriviaHard.getTriviaHard();
  promiseHard.then(function (response) {
    const body = JSON.parse(response);
    $('.showQuestion').html(body.results[0].question);
    $('.showAnswers').hide();
    $('.showAnswers').html(body.results[0].correct_answer);

  }, function (error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });

  $('#answers').click(function () {
    $('.showAnswers').show();
  });
});