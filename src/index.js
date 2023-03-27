import './css/styles.css';
import fetchCountries from './js/searchCountry';
import {renderingCountryList, renderingCountryInfo} from './js/renderForm'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const formInput = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info')
const countryList = document.querySelector('.country-list')
// placeholder: 'Please, enter name of country'

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

// function renderingCountryList(countries) {
//     countryList.innerHTML = countries
//     .map(country => {
//     return `<li class = "country-list__item">
//     <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100" height="50">
//         <p>${country.name.common}</p>
//                 </li>`;
//     })
//     .join('');
// }
  
// function renderingCountryInfo(country) {
//     countryInfo.innerHTML = country
//       .map(country => {
//         return `<div class = "country-info__wrap">
//         <img src="${country.flags.svg}" alt="Flag of ${
//           country.name.common
//         }" width="100" height="50">
//            <h2 class = "country-info__title">${country.name.common}</h2></div>
//            <p><strong>Full name:</strong> ${country.name.official}</p>
//               <p><strong>Capital:</strong> ${country.capital}</p>
//               <p><strong>Population:</strong> ${country.population}</p>
//               <p><strong>Languages:</strong> ${Object.values(
//                 country.languages
//               ).join(', ')} </p>
//                   `;
//       })
//       .join('');
//   }



