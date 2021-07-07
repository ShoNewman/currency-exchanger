import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyService from './js/currency-service.js';

async function makeApiCall(location, amount) {
  const response = await currencyService.getCurreny(location, amount);
  if (response) {
    let exchange = response.conversion_result;
    console.lot(response);
    $('.showExchange').text(`${exchange}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function () {
  $('#submit').on('click', function (e) {
    e.preventDefault();
    let location = $('#location').val();
    console.log(location);
    let currency = parseInt($('#exchange').val());
    console.log(currency);
    makeApiCall(location, currency);

  });
});
