import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import currencyService from './js/currency-service.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let location = $('#location').val();
    currencyService.getCurreny(location)
      .then(function(response) {
        if (response) {
          console.log(response.conversion_rates[location]);
        } 
      });
  });
});