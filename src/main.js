import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyService from './js/currency-service.js';

async function makeApiCall(base, target, amount) {
  const response = await currencyService.getCurreny(base, target, amount);
  let exchange = response.conversion_result;
  if (response) {
    $('.showExchange').show();
    $('.showExchange').text(`${exchange} ${base}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

async function makeApiCall2() {
  const response = await currencyService.getCodes();
  if (response) {
    for (let i = 0; i < response.supported_codes.length; i++) {
      let countries = response.supported_codes[i][1];
      let code = response.supported_codes[i][0];
      $('#base').append(`<option value="${code}">${countries}</option>`);
      $('#target').append(`<option value="${code}">${countries}</option>`);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  makeApiCall2();
  $('#submit').on('click', function (e) {
    e.preventDefault();
    let base = $('#base').val();
    let target = $('#target').val();
    let amount = parseInt($('#exchange').val());
    makeApiCall(base, target, amount);
  });
});
