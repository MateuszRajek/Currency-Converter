const btnConverter = document.querySelector('.click-to-convert-btn');
const inputAmountToConvert = document.querySelector('.amount-to-convert');
const currencySelector = document.querySelector('.currency-options');
const outputScore = document.querySelector('.after-convert-value');
const currentCurrencyTxtSpn = document.querySelector('.currentCurrency');
let currency = currencySelector.value

const valueOfCurrency = function () {
    currency = this.value;
}

currencySelector.addEventListener('change', valueOfCurrency)


function currencyExchange(currentCurrency) {
    const userAmount = inputAmountToConvert.value;
    if (currency === 'eur') {
        outputScore.value = `${(userAmount * currentCurrency).toFixed(2)} PLN`;
    } else if (currency === 'chf') {
        outputScore.value = `${(userAmount * currentCurrency).toFixed(2)} PLN`;
    } else if (currency === 'usd') {
        outputScore.value = `${(userAmount * currentCurrency).toFixed(2)} PLN`;
    } else if (currency === 'gbp') {
        outputScore.value = `${(userAmount * currentCurrency).toFixed(2)} PLN`;
    }

    currentCurrencyTxtSpn.textContent = `Current currency value of ${currency.toUpperCase()} is: ${currentCurrency} PLN`
}


async function getCurrency() {
    let response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`);
    let json = await response.json();
    let finalScore = await json.rates[0].mid
    const currentCurrency = finalScore;

    currencyExchange(currentCurrency)
}


btnConverter.addEventListener('click', getCurrency)