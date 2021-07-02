import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyService from './js/currency-service.js';

async function makeApiCall(location, currency) {
  const response = await currencyService.getCurreny();
  if (response) {
    console.log(response.conversion_rates[location] * currency);

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
