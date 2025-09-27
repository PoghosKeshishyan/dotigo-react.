import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getHostingPageData = async () => {
    try {
        const resHeading = await axios.get(`hosting/hosting_page_heading?lang=${DISPLAY_LANG}`);
        const resQuestionHeading = await axios.get(`hosting/hosting_page_question_list_heading`);
        const resQuestion = await axios.get(`hosting/hosting_page_question_list?lang=${DISPLAY_LANG}`);

        return {
            heading: await resHeading.data[0],
            question: { heading: await resQuestionHeading.data[0], data: await resQuestion.data },
        };
    } catch (error) {
        console.log(error);
    }
};