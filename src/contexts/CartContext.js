import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);

    const addDomainToCart = (item) => {
        const existingItem = orders.find(elem => elem.id === item.id);

        if (existingItem) {
            const newOrders = orders.filter(elem => elem.id !== item.id);
            setOrders(newOrders);
        } else {
            setOrders([item, ...orders]);
        }
    };

    return (
        <CartContext.Provider value={{ orders, addDomainToCart }}>
            {children}
        </CartContext.Provider>
    );
}