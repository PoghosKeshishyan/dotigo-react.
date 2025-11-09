import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getHostingData = async (billingType) => {
    try {
        const res = await axios.get(`global/hosting_plans?lang=${DISPLAY_LANG}&billing=${billingType}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTopLevelDomains = async () => {
    try {
        const res = await axios.get('global/top_level_domains')
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

/* ================ domains api ================ */

export const getDomains = async (title, currency) => {
    try {
        const lastDot = title.lastIndexOf('.');

        if (lastDot === -1) {
            /** 
                @DESCRIPTION
                sa ayn depqn e, vor klient@ grel e orinak example,
                ev menq RESELLER - ic vercnum enq complect@, orinak:
                  example.com
                  example.ru
                  example.net
                  ...
            */

            const response = await axios.get(`domain/get_domain?domain=${title}&currency=${currency}`);
            const result = response.data.results.map((elem, i) => { return { ...elem, id: Date.now() + i } });
            return result;
        } else {
            /** 
                @DESCRIPTION
                ete klient@ zapros e arel orinak example.com, 
                menq vercnum enq verjin .com grvac@ ev query darcnum,
                ayspes: exmaple&tlds=com
                sa RESELLER i pahanjn e
            */

            let domain_name = title.split('.').slice(0, -1).join('.');

            let arr = title.split('.');
            let last = arr[arr.length - 1];
            let query = last = '&tlds=' + last;

            const response = await axios.get(`domain/get_domain?domain=${domain_name}${query}&currency=${currency}`);
            response.data.results[0].id = Date.now();
            return response.data.results;
        }

    } catch (error) {
        console.log(error);
    }
};

export const registerDomain = async (orders) => {
    /**======================================================
     @description 
     ays funkcian petqa a ashxati VCHARUMIC HETO 
     ========================================================
    */

    const domains = orders.filter(elem => elem.type === 'domain');
    let responses = [];

    for (let i = 0; i < domains.length; i++) {
        const body = {
            domain_name: domains[i].domain,
            years: domains[i].number_of_years,
            customer_id: "32329513",
            contact_id: "131935043",
        }
        
        const response = await axios.post('domain/register_domain', body);
        responses.push(response.data);
    }

    localStorage.setItem('REGISTERED-DOMAINS', JSON.stringify(responses));
};

const payDomain = async () => {
    const registeredDomains = JSON.parse(localStorage.getItem('REGISTERED-DOMAINS'));



};