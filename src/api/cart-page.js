import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getCartPageData = async () => {
    try {
        const resCartEmptyMessage = await fetch('http://localhost:8000/cart_is_empty_message');
        const data1 = await resCartEmptyMessage.json();

        const resCartPage = await fetch('http://localhost:8000/cart_page?lang='+DISPLAY_LANG);
        const data2 = await resCartPage.json();

        return {
            cartEmptyMessage: data1,
            cartPage: data2[0],
        };
    } catch (error) {
        console.log(error);
    }
};