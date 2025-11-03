import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getCartPageData = async () => {
    try {
        const resCartEmptyMessage = await axios.get('cart/cart_empty_maessage');
        const resCartPage = await axios.get(`cart/cart_page?lang=${DISPLAY_LANG}`);

        const registerDomainMessage = {
            "en": "Registration for year",
            "ru": "Регистрация на год",
            "am": "Գրանցումը տարվա համար",
        };

        return {
            cartEmptyMessage: resCartEmptyMessage.data[0],
            cartPage: {...resCartPage.data, registerDomainMessage},
        };
    } catch (error) {
        console.log(error);
    }
};