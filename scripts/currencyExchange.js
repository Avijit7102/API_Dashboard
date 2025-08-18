import { api_key } from "./apiKey.js";
const api_url = "https://v6.exchangerate-api.com/v6";

const currencyFrom = document.getElementById("currencyFrom");
const currencyTo = document.getElementById("currencyTo");
const currencyAmount = document.getElementById("currencyAmount");
const currencyConvertBtn = document.getElementById("currencyConvertBtn");
const currencyBody = document.getElementById("currencyBody");

currencyConvertBtn.addEventListener("click", () => {
  getConversionRates();
});

const getConversionRates = async () => {
  console.log("Getting conversion rates...");
  const from = currencyFrom.value.toUpperCase().trim();
  const to = currencyTo.value.toUpperCase().trim();
  const amount = currencyAmount.value;

  // Validate input
  if (!from || !to || isNaN(amount)) {
    currencyBody.innerHTML =
      "<p class='text-danger'>Please enter valid values.</p>";
    return;
  }

  currencyBody.innerHTML = "<p>Converting...</p>";

  const url = `${api_url}/${api_key}/pair/${from}/${to}/${amount}`; // constructing the URL
  console.log(`Fetching data from: ${url}`);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("API response:", data);

    if (data.result === "error") {
      currencyBody.innerHTML = `<p class="text-danger">Error: ${data["error-type"]}</p>`;
      return;
    }

    const conversionResult = data.conversion_result.toFixed(2);

    // Displaying the result
    currencyBody.innerHTML = `
      <h4 class="text-success">${conversionResult} ${to}</h4>
    `;
  } catch (err) {
    console.error("Error fetching data: ", err);
    currencyBody.innerHTML = `<p class = "text-danger">Error: ${err.message}</p>`;
    return;
  }
};
