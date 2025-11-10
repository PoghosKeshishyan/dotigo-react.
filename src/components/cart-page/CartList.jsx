import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DISPLAY_LANG } from '../../config';
import { registerDomain } from '../../api/global';
import './CartList.css';

export default function CartList({
  orders, setOrders, pagedata, changeYearFromDomain, removeDomainFromCart, total
}) {
  const [showLoading, setShowLoading] = useState(false);

  const a = pagedata.registerDomainMessage[DISPLAY_LANG].split('/')[0];
  const b = pagedata.registerDomainMessage[DISPLAY_LANG].split('/')[1];

  return (
    <div className="CartList">

      <div className="heading flex-between">
        <h2>{pagedata.title}</h2>

        <Link to={'/'}>
          {pagedata.shopping_label}
          <img src="/images/partials/arrow-right.svg" alt="arrow-right" />
        </Link>
      </div>

      <div className="order-list">
        {
          orders.map(elem => (
            <div className='order flex-between' key={elem.id}>
              <div className='left-side'>
                <h3>{elem.domain}</h3>

                <select
                  defaultValue={elem.number_of_years}
                  onChange={(event) => changeYearFromDomain(elem.id, event.target.value)}
                >
                  <option value="1">{a} 1 {b}</option>
                  <option value="2">{a} 2 {b}</option>
                  <option value="3">{a} 3 {b}</option>
                  <option value="4">{a} 4 {b}</option>
                  <option value="5">{a} 5 {b}</option>
                </select>
              </div>

              <div className="right-side flex-center">
                <div className='price'>{elem.total_price} ֏</div>
                <img src="/images/domains/trash.svg" alt="trash" onClick={() => removeDomainFromCart(elem.id)} />
              </div>
            </div>
          ))
        }
      </div>

      <div className="total">
        <div className='flex-between'>
          <p>{pagedata.total_label}</p>
          <p>{total} ֏</p>
        </div>

        <button 
          className='btn pay-btn flex-center' 
          onClick={() => registerDomain(orders, setOrders, setShowLoading)}
        >
          {pagedata.btn_text} {showLoading && <span className="spinner"></span>}
        </button>
      </div>

    </div>
  )
}
