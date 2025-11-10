import { useContext, useEffect, useState } from 'react';
import { getCartPageData } from '../api/cart-page';
import { CartContext } from '../contexts/CartContext';
import { DISPLAY_LANG } from '../config';
import Loading from "../components/loading";
import CartList from '../components/cart-page/CartList';
import '../stylesheets/cart.css';

export default function CartPage() {
    const { 
        orders, setOrders, changeYearFromDomain, removeDomainFromCart, total 
    } = useContext(CartContext);
    
    const [loading, setLoading] = useState(true);
    const [cartEmptyData, setCartEmptyData] = useState(null);
    const [cartPageData, setCartPageData] = useState(null);

    useEffect(() => {
        const loadingData = async () => {
            const data = await getCartPageData();
            setCartEmptyData(data.cartEmptyMessage);
            setCartPageData(data.cartPage);
            setLoading(false);
        };

        loadingData();
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="CartPage wrapper">
            <div className="content">
                {!orders.length && <p className='cart-empty-message'>{cartEmptyData[DISPLAY_LANG]}</p>}
                
                {cartPageData && !!orders.length && (
                    <CartList 
                      orders={orders} 
                      setOrders={setOrders}
                      pagedata={cartPageData} 
                      changeYearFromDomain={changeYearFromDomain}
                      removeDomainFromCart={removeDomainFromCart}
                      total={total} 
                    />
                )}
            </div>
        </div>
    )
}
