import { Link } from 'react-router-dom';
import { DISPLAY_LANG } from '../../config';
import './CartList.css';

export default function CartList({ 
  orders, pagedata, increaseAmount, decreaseAmount, removeDomainFromCart, total 
}) {
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

                <div className="flex-center">
                  <p>{pagedata.registerDomainMessage[DISPLAY_LANG]}</p>

                  <div className="controls flex-center">
                    <img src="/images/domains/minus.svg" alt="minus" onClick={() => decreaseAmount(elem.id)} />
                    <span>{elem.number_of_years}</span>
                    <img src="/images/domains/plus.svg" alt="plus" onClick={() => increaseAmount(elem.id)} />
                  </div>
                </div>
              </div>

              <div className="right-side flex-center">
                <div className='price'>{elem.yearly_price} ֏</div>
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

        <button className='btn'>{pagedata.btn_text}</button>
      </div>

    </div>
  )
}
