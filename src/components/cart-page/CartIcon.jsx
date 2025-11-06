import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './CartIcon.css';

export default function CartIcon() {
    const { orders } = useContext(CartContext);
    const [isScroll, setIsSrcoll] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 80) setIsSrcoll(true);
        else setIsSrcoll(false);
    };

    if (location.pathname === '/cart') {
        return null;
    }

    return (
        <div 
          className={`CartIcon ${isScroll ? 'on-scroll' : ''}`}
          onClick={() => navigate('/cart')}
        >
            <img src="/images/partials/cart-icon.svg" alt="cart-icon" />
            <div className="amount">{orders.length}</div>
        </div>
    )
}
