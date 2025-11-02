import { Link } from 'react-router-dom';
import './CartList.css';

export default function CartList({ orders, pagedata }) {
  console.log(pagedata);
  
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
                <p>Registration for 1 year</p>
              </div>

              <div className='price'>{elem.yearly_price} ֏</div>
            </div>
          ))
        }
      </div>

      <div className="total">
        <div className='flex-between'>
          <p>{pagedata.total_label}</p>
          <p>600 ֏</p>
        </div>

        <button className='btn'>{pagedata.btn_text}</button>
      </div>

    </div>
  )
}
