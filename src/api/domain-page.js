import axios from "../axios";

export const getDomainPageData = async () => {
    try {
        const res = await axios.get('domain/domain_page');

        const registeredDomainMessage = {
            en: "registered",
            ru: "зарегистрированный",
            am: "գրանցված",
        };

        return {...res.data, registeredDomainMessage};
    } catch (error) {
        console.log(error);
    }
};