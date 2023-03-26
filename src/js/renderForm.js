const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('country-info')
// export default function renderPhotos(photo) {
//     const {earth_date, img_src, rover, camera, id} = photo;
//     const card = `
//         <li>
//         <a href="${img_src}" class="photo-link"><img  src="${img_src}" alt="Photo - ${id}" width=160 /></a>
//             <h3>Made photo by ${rover.name}</h3>
//             <p>photo date ${earth_date}</p>
//             <p>Camera:${camera.full_name}</p>
//         </li>
//     `
//     gallery.insertAdjacentHTML("beforeend", card);
// }

// function renderingCountryList(countries) {
//     countryList.innerHTML = countries
//       .map(country => {
//         return `<li class = "country-list__item">
//         <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="100" height="50">
//            <p>${country.name.common}</p>
//                   </li>`;
//       })
//       .join('');
//   }

function renderingCountryList(country) {
  const {flags, name} = country;
  const countryName = `<li class = "country-list__item">
  <img src="${flags.svg}" alt="Flag of ${name.common}" width="100" height="50">
     <p>${country.name.common}</p>
            </li>`;
            countryList.insertAdjacentElement(countryName);
}

  function renderingCountryInfo(country) {
    countryInfo.innerHTML = country
      .map(country => {
        return `<div class = "country-info__wrap">
        <img src="${country.flags.svg}" alt="Flag of ${
          country.name.common
        }" width="100" height="50">
           <h2 class = "country-info__title">${country.name.common}</h2></div>
           <p><strong>Full name:</strong> ${country.name.official}</p>
              <p><strong>Capital:</strong> ${country.capital}</p>
              <p><strong>Population:</strong> ${country.population}</p>
              <p><strong>Languages:</strong> ${Object.values(
                country.languages
              ).join(', ')} </p>
                  `;
      })
      .join('');
  }
  
  export {renderingCountryList, renderingCountryInfo};