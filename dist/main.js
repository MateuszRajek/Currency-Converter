"use strict";
const btnConverter = document.querySelector('.click-to-convert-btn');
const inputAmountToConvert = document.querySelector('.amount-to-convert');
const currencySelector = document.querySelector('.currency-options');
const outputScore = document.querySelector('.after-convert-value');
const currentCurrencyTxtSpn = document.querySelector('.currentCurrency');
let currency = currencySelector.value;
const valueOfCurrency = function () {
    return currency = currencySelector.value;
};
btnConverter.addEventListener('click', getCurrency);
currencySelector.addEventListener('change', valueOfCurrency);
function currencyExchange(currentCurrency) {
    const userAmount = parseInt(inputAmountToConvert.value);
    outputScore.value = `${(userAmount * currentCurrency).toFixed(2)} PLN`;
    return currentCurrencyTxtSpn.textContent = `Current currency value of ${currency.toUpperCase()} is: ${currentCurrency} PLN`;
}
async function getCurrency() {
    let response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`);
    let json = await response.json();
    let finalScore = await json.rates[0].mid;
    const currentCurrency = finalScore;
    return currencyExchange(currentCurrency);
}
