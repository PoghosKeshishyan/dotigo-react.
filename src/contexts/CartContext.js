import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const data = localStorage.getItem('cart-items');
        if (data) setOrders(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('cart-items', JSON.stringify(orders));

        const total = orders.reduce((acc, elem) => acc + elem.total_price, 0);
        setTotal(total);
    }, [orders]);

    const addDomainToCart = (item) => {
        const existingDomain = orders.find(elem => elem.id === item.id);

        if (existingDomain) {
            const newOrders = orders.filter(elem => elem.id !== item.id);
            setOrders(newOrders);
        } else {
            const newDomain = {
                ...item,
                type: 'domain',
                number_of_years: "1",
                total_price: item.yearly_price,
            };

            setOrders([newDomain, ...orders]);
        }
    };

    const removeDomainFromCart = (id) => {
        const newOrders = orders.filter(elem => elem.id !== id);
        setOrders(newOrders);
    };

    const changeYearFromDomain = (id, value) => {
        const newOrders = orders.map(elem => {
            if (elem.id === id) {
                elem.number_of_years = value;
                elem.total_price = Math.ceil(elem.yearly_price * value);
            }

            return elem;
        });

        setOrders(newOrders);
    };

    return (
        <CartContext.Provider value={{
            orders, addDomainToCart, removeDomainFromCart, changeYearFromDomain, total
        }}>
            {children}
        </CartContext.Provider>
    );
}