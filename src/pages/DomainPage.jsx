import { useEffect, useState, useRef } from "react";
import { DISPLAY_LANG } from '../config';
import { getDomainPageData } from '../api/domain-page';
import { getDomains } from "../api/global";
import Loading from "../components/loading";
import TopLevelDomains from '../components/top-level-domains';
import DomainList from "../components/register-domain-page/DomainList";
import '../stylesheets/domain.css';

export default function DomainPage() {
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState(null);
    const [currentDomains, setCurrentDomains] = useState(null);
    const [isWarningShow, setIsWarningShow] = useState(false);
    const [searchedDomain, setSearchedDomain] = useState(sessionStorage.getItem('searched-domain') || '');
    const inputRef = useRef(null);

    useEffect(() => {
        const loadingData = async () => {
            const resPageData = await getDomainPageData();
            setPageData(resPageData);

            if (searchedDomain) {
                const resDomains = await getDomains(searchedDomain);
                setCurrentDomains(resDomains);
            }

            setLoading(false);
        };

        loadingData();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!loading && inputRef.current) {
            inputRef.current.focus();
        }
    }, [loading]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (searchedDomain) {
            setLoading(true);
            const resDomains = await getDomains(searchedDomain);
            setCurrentDomains(resDomains);
            setIsWarningShow(true);
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return pageData && (
        <div className="RegisterDomainPage wrapper">
            <p className="sub-title">{pageData.sub_title[DISPLAY_LANG]}</p>
            <h1 className="title">{pageData.title[DISPLAY_LANG]}</h1>

            <div className="content">
                <form className="search-domain-form" onSubmit={onSubmit}>
                    <input type="search" required ref={inputRef} value={searchedDomain} onChange={e => setSearchedDomain(e.target.value)} />
                    <input type="submit" className="btn" value={pageData.btn_text[DISPLAY_LANG]} />
                </form>

                <TopLevelDomains />
            </div>

            {
                currentDomains && 
                currentDomains.length ? 
                    <DomainList currentDomains={currentDomains} pageData={pageData} /> 
                : (
                    isWarningShow && <div className="no-domain-message">
                        {pageData.no_domain_messages[DISPLAY_LANG]}
                    </div>
                )
            }
        </div>
    )
}