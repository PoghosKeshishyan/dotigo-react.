import axios from "../axios";

export const getDomainPageData = async () => {
    try {
        const res = await axios.get('domain/domain_page');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};