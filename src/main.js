import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyService from './js/currency-service.js';

async function makeApiCall(location, currency) {
  const response = await currencyService.getCurreny(location, currency);
  if (response) {
    let exchange = response.conversion_result;
    $('.showExchange').text(`${exchange} currency`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#submit').on('click', function (e) {
    e.preventDefault();
    let location = $('#location').val();
    let currency = parseInt($('#exchange').val());
    console.log(currency);
    makeApiCall(location, currency);
  });
});
