import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import './DomainList.css';

export default function DomainList({ currentDomains }) {
  const [cartStatus, setCartStatus] = useState({});
  const { addDomainToCart } = useContext(CartContext);

  const toggleCart = (elem) => {
    setCartStatus((prev) => ({
      ...prev,
      [elem.id]: !prev[elem.id]
    }));

    addDomainToCart(elem);
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
                <span className="price">{elem.yearly_price} ֏</span>
              </div>

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
        ))}
    </div>
  );
}
