import './css/styles.css';
import fetchCountries from './js/searchCountry';
import {countryList, countryInfo, renderingCountryList, renderingCountryInfo} from './js/renderForm'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const formInput = document.querySelector('#search-box');
formInput.placeholder = 'Please, enter name of country';

formInput.addEventListener(
    'input',
    debounce(handleDataInput, DEBOUNCE_DELAY)
  );

function handleDataInput(event) {
    const countryInput = event.target.value.trim();
        if (countryInput === ''){
        clearData()
        return;
    }
    fetchCountries(countryInput)
      .then(fetchCountriesData => {
        if(fetchCountriesData.length > 10) {
            clearData()
            Notify.failure('Too many matches found. Please enter a more specific name.');
        } else if (fetchCountriesData.length > 1 && fetchCountriesData.length < 10) {
            clearData();
            renderingCountryList(fetchCountriesData);
        } else {
            clearData();
            renderingCountryInfo(fetchCountriesData);
        };
      })
}
function clearData() {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
      }




