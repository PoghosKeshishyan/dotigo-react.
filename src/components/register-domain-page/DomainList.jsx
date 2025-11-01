import { useState } from "react";
import './DomainList.css';

export default function DomainList({ currentDomains }) {
  const [cartStatus, setCartStatus] = useState({});

  const toggleCart = (id) => {
    setCartStatus((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="domain-list">
      {currentDomains
        .filter(elem => elem.status === 'available')
        .map((elem, idx) => (
          <div key={idx} className="domain-item flex-between">
            <p className="domain-title">{elem.domain}</p>

            <div className="buy flex-center">
              <div className="price-box">
                <span className="price">Դ {elem.yearly_price}</span>
              </div>

              <img
                src={
                  cartStatus[elem.id]
                    ? "/images/partials/cart-checked.svg"
                    : "/images/partials/cart.svg"
                }
                alt={elem.title}
                onClick={() => toggleCart(elem.id)}
                className="btn"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
