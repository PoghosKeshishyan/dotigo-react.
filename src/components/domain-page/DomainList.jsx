import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { DISPLAY_LANG } from "../../config";
import './DomainList.css';

export default function DomainList({ currentDomains, pageData }) {
  const [cartStatus, setCartStatus] = useState({});
  const { addDomainToCart } = useContext(CartContext);
  const { selectedCurrency } = useContext(CurrencyContext);

  const toggleCart = (elem) => {
    setCartStatus((prev) => ({
      ...prev,
      [elem.id]: !prev[elem.id]
    }));

    addDomainToCart(elem);
  };

  return (
    <div className="domain-list">
      {currentDomains.map((elem, idx) => elem.status === 'available' ?
        (
          <div key={idx} className="domain-item flex-between">
            <p className="domain-title">{elem.domain}</p>

            <div className="buy flex-center">
              <span className="price">
                {selectedCurrency.symbol === '$' && selectedCurrency.symbol+' '}
                {elem.yearly_price}
                {selectedCurrency.symbol !== '$' && ' '+selectedCurrency.symbol}
              </span>

              <img
                src={
                  cartStatus[elem.id]
                    ? "/images/partials/cart-checked.svg"
                    : "/images/partials/cart.svg"
                }
                alt={elem.title}
                onClick={() => toggleCart(elem)}
                className="btn"
              />
            </div>
          </div>
        )
        :
        (
          <div key={idx} className='domain-item registered'>
            <p className="domain-title">
              {elem.domain} ({pageData.registeredDomainMessage[DISPLAY_LANG]})
            </p>
          </div>
        )
      )}
    </div>
  );
}
