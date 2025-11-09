import { useState, useRef, useEffect, useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export default function CurrencyDropdown() {
  const { currencyList, selectedCurrency, setSelectedCurrency } = useContext(CurrencyContext);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const currencyRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setShowCurrencyDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyDropdown(false);
  };

  if (!currencyList || !selectedCurrency) {
    return null;
  }

  return (
    <div className="change-currency" ref={currencyRef}>
      <div
        className="selected-currency flex-center"
        onClick={() => setShowCurrencyDropdown(prev => !prev)}
      >
        <span>{selectedCurrency.title}</span>
        <img src="/images/partials/arrow.svg" className="flag-arrow" alt="arrow" />
      </div>

      {showCurrencyDropdown && (
        <div className="currency-dropdown">
          {currencyList.map(currency => (
            <div
              key={currency.id}
              className="currency-option flex-center"
              onClick={() => handleCurrencySelect(currency)}
            >
              <span className={currency.title === selectedCurrency.title ? 'active' : ''}>
                {currency.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
