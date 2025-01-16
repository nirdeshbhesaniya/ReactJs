import  { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const rate = response.data.rates[targetCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>

      <div className="converter-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />

        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <button onClick={handleConvert}>Convert</button>
      </div>

      {convertedAmount && (
        <div className="conversion-result">
          <p>
            {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;