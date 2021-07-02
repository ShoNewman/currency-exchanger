import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyService from './js/currency-service.js';

async function makeApiCall(location) {
  const response = await currencyService.getCurrency(location);
  if (response) {
    console.log(response.conversion_rates[location]);
  }
}


$('#location').on('click', function() {
  let location = $('#location').val();
  makeApiCall(location);
});

