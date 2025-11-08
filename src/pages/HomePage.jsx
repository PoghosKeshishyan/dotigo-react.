import { useEffect, useState } from "react";
import { getHomePageData } from "../api/home-page";
import { getHostingData } from "../api/global";
import Loading from "../components/loading";
import Intro from '../components/home-page/Intro/';
import Services from "../components/home-page/Services/";
import Map from "../components/home-page/Map/";
import HostingPlans from "../components/home-page/HostingPlans/";
import QuestionList from "../components/home-page/QuestionList/";
import RegisterBanner from "../components/home-page/RegisterBanner/";
import HelpCenter from '../components/home-page/HelpCenter/';

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [introData, setIntroData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [mapData, setMapData] = useState(null);
    const [hostingPlansHeading, setHostingPlansHeading] = useState(null);
    const [hostingPlans, setHostingPlans] = useState(null);
    const [questionData, setQuestionData] = useState(null);
    const [registerBannerData, setRegisterBannerData] = useState(null);
    const [helpCenterData, setHelpCenterData] = useState(null);

    const [billingType, setBillingType] = useState("/month");

    useEffect(() => {
        const loadingData = async () => {
            const data = await getHomePageData();
            setIntroData(data.intro);
            setServicesData(data.services);
            setMapData(data.map);
            setHostingPlansHeading(data.hostingPlansHeading);
            setQuestionData(data.question);
            setRegisterBannerData(data.registerBanner);
            setHelpCenterData(data.helpCenter);
            setLoading(false);
        };

        loadingData();
        sessionStorage.removeItem('searched-domain');
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const loadingData = async () => {
            const data = await getHostingData(billingType);
            setHostingPlans(data);
        };

        loadingData();
    }, [billingType]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="HomePage">
            {introData && <Intro introData={introData} />}
            {servicesData && <Services servicesData={servicesData} />}
            {mapData && <Map mapData={mapData} />}
            {hostingPlansHeading && hostingPlans && <HostingPlans hostingPlansHeading={hostingPlansHeading} hostingPlans={hostingPlans} billingType={billingType} setBillingType={setBillingType} />}
            {questionData && <QuestionList questionData={questionData} />}
            {registerBannerData && <RegisterBanner registerBannerData={registerBannerData} />}
            {helpCenterData && <HelpCenter helpCenterData={helpCenterData} />}
        </div>
    )
}