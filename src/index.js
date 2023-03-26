import './css/styles.css';
import fetchCountries from './js/searchCountry';
import {renderingCountryList, renderingCountryInfo} from './js/renderForm'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const formInput = document.querySelector('#search-box');
const countryInfo = document.querySelector('country-info')
const countryList = document.querySelector('.country-list')
placeholder: 'Please, enter name of country'


formInput.addEventListener(
    'input',
    debounce(handleDataInput, DEBOUNCE_DELAY)
  );

function handleDataInput(event) {
    const countryInput = event.target.value.trim();
    // console.log(countryInput);
    if (countryInput === ''){
        return
       
    }
    fetchCountries(countryInput).then(dataCountry => {
        console.log(dataCountry);
    })
}



fetchCountries().then(dataCountry => {
    console.log(dataCountry);
}).catch(() => {
    Notify.failure('Oops, there is no country with that name');
})


function clearData() {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
      }
// ----------------------------------------------------

// function handleDataInput(event) {
//     const countryInput = event.target.value.trim();
//     if (countryInput === '') {
//       clearData();
//       return;
//     }
//     fetchCountries(countryInput)
//       .then(fetchCountriesData => {
//         if (fetchCountriesData.length > 10) {
//           clearData();
//           Notify.info(
//             'Too many matches found. Please enter a more specific name.'
//           );
//         } else if (fetchCountriesData.length > 1 && fetchCountriesData.length <= 10) {
//           clearData();
//           renderingCountryList(fetchCountriesData);
//         } else {
//           clearInput();
//           clearData();
//           renderingCountryInfo(fetchCountriesData);
//         }
//       })
//       .catch(error => {
//         Notify.failure('Oops, there is no country with that name');
//         clearInput();
//         clearData();
//       });
//   }

//   function clearData() {
//     countryInfo.innerHTML = '';
//     countryList.innerHTML = '';
//   }
  
//   function clearInput() {
//     formInput.value = '';
//   }


