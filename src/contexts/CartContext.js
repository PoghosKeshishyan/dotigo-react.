import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = orders.reduce((acc, elem) => acc + elem.yearly_price * elem.number_of_years, 0);
        setTotal(total);
    }, [orders]);

    const addDomainToCart = (item) => {
        const existingDomain = orders.find(elem => elem.id === item.id);

        if (existingDomain) {
            const newOrders = orders.filter(elem => elem.id !== item.id);
            setOrders(newOrders);
        } else {
            const newDomain = { ...item, number_of_years: 1, type: 'domain' }
            setOrders([newDomain, ...orders]);
        }
    };

    const increaseAmount = (id) => {
        const newOrders = orders.map(elem => {
            if (elem.id === id) {
                elem.number_of_years = elem.number_of_years + 1;
            }

            return elem;
        });

        setOrders(newOrders);
    };

    const decreaseAmount = (id) => {
        const item = orders.find(elem => elem.id === id);

        if (item.number_of_years - 1 === 0) {
            return removeDomainFromCart(id);
        }

        const newOrders = orders.map(elem => {
            if (elem.id === id) {
                elem.number_of_years = elem.number_of_years - 1;
            }

            return elem;
        });

        setOrders(newOrders);
    };

    const removeDomainFromCart = (id) => {
        const newOrders = orders.filter(elem => elem.id !== id);
        setOrders(newOrders);
    };

    return (
        <CartContext.Provider value={{ 
            orders, addDomainToCart, increaseAmount, decreaseAmount, 
            removeDomainFromCart, total 
        }}>
            {children}
        </CartContext.Provider>
    );
}