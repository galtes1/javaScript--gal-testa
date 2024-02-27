console.log("hello class 9");

async function getCountries() {
 const response = await fetch("https://restcountries.com/v3.1/all");
 const data = await response.json();
 console.log(data);
 showCountriesOnDocument(data);
}

getCountries();

function showCountriesOnDocument(countries) {
 let = tableBody = document.getElementById("tableBody");

 countries.forEach((country) => {
  let newTr = document.createElement("tr");
  let nameTd = document.createElement("td");
  nameTd.innerText = country.name.common;
  newTr.appendChild(nameTd);
  tableBody.appendChild(newTr);
 });
}
