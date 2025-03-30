// Currencies data
const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "KRW", name: "South Korean Won" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "INR", name: "Indian Rupee" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "ZAR", name: "South African Rand" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "DKK", name: "Danish Krone" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "THB", name: "Thai Baht" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "ILS", name: "Israeli Shekel" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "AED", name: "UAE Dirham" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "TZS", name: "Tanzanian Shilling" },
    { code: "UGX", name: "Ugandan Shilling" },
    { code: "XOF", name: "CFA Franc BCEAO" },
    { code: "XAF", name: "CFA Franc BEAC" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "SDG", name: "Sudanese Pound" },
    { code: "MZN", name: "Mozambican Metical" },
    { code: "RWF", name: "Rwandan Franc" }
];

// DOM Elements
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('currency-result');

// Initialize currencies
function initCurrencies() {
    currencies.forEach(currency => {
        const option1 = new Option(`${currency.code} - ${currency.name}`, currency.code);
        const option2 = new Option(`${currency.code} - ${currency.name}`, currency.code);
        fromCurrency.add(option1);
        toCurrency.add(option2);
    });
    
    // Set defaults
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
}

// Convert currency
convertBtn.addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;
    
    if (isNaN(amount) {
        resultDiv.textContent = "Please enter a valid amount";
        return;
    }
    
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${config.API_KEY}/pair/${from}/${to}/${amount}`);
        const data = await response.json();
        
        if (data.result === "success") {
            resultDiv.innerHTML = `${amount} ${from} = <strong>${data.conversion_result.toFixed(2)} ${to}</strong>`;
        } else {
            resultDiv.textContent = "Conversion failed. Please try again.";
        }
    } catch (error) {
        resultDiv.textContent = "Network error. Please check your connection.";
    }
});

// Initialize
initCurrencies();
