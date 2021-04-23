const btnConverter = <HTMLElement>document.querySelector('.click-to-convert-btn');
const inputAmountToConvert = <HTMLInputElement>document.querySelector('.amount-to-convert');
const currencySelector = <HTMLOptionElement>document.querySelector('.currency-options');
const outputScore = <HTMLInputElement>document.querySelector('.after-convert-value');
const currentCurrencyTxtSpn = <HTMLElement>document.querySelector('.currentCurrency');
let currency: string = currencySelector.value;

const valueOfCurrency = function():string {
    return currency = currencySelector.value;
}

btnConverter.addEventListener('click', getCurrency);
currencySelector.addEventListener('change', valueOfCurrency);

function currencyExchange(currentCurrency: number):string {
    const userAmount: number = parseInt(inputAmountToConvert.value);
    outputScore.value = `${(userAmount * currentCurrency).toFixed(2)} PLN`;

    return currentCurrencyTxtSpn.textContent = `Current currency value of ${currency.toUpperCase()} is: ${currentCurrency} PLN`;
}

async function getCurrency():Promise<string> {
    let response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`);
    let json = await response.json();
    let finalScore = await json.rates[0].mid;
    const currentCurrency: number = finalScore;

    return currencyExchange(currentCurrency);
}

