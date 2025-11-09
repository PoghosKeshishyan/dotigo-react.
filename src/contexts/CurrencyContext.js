import { createContext, useEffect, useState } from "react";
import { DISPLAY_LANG } from "../config";

export const CurrencyContext = createContext();

export default function CurrencyProvider({ children }) {
    const currencyList = [
        { id: 1, title: 'USD', code: 'en', symbol: '$' },
        { id: 2, title: 'EUR', code: null, symbol: '€' },
        { id: 3, title: 'RUB', code: 'ru', symbol: '₽' },
        { id: 4, title: 'AMD', code: 'am', symbol: '֏' },
    ];

    const [selectedCurrency, setSelectedCurrency] = useState(null);

    //============================================================= 
    //============================================================= 
    //============================================================= 
    //============================================================= 
    /**@selectedCurrency poxvelu jamanak petq a domainner@ noric zapros anel */
    //============================================================= 
    //============================================================= 
    //============================================================= 



    useEffect(() => {
        const currentCurrencyList = currencyList.find(c => c.code === DISPLAY_LANG);
        setSelectedCurrency(currentCurrencyList)
    }, []);

    return (
        <CurrencyContext.Provider value={{ currencyList, selectedCurrency, setSelectedCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}