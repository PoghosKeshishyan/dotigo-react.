import { useEffect, useRef, useState } from 'react';
import { DISPLAY_LANG } from '../../config';

export default function LangDropdown({ langs }) {
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const currentLang = langs.find(l => l.code === DISPLAY_LANG);
    const langRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setShowLangDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="change-lang" ref={langRef}>
            <div
                className="selected-lang flex-center"
                onClick={() => setShowLangDropdown(prev => !prev)}
            >
                {currentLang && (
                    <>
                        <img src={currentLang.image} alt={`${currentLang.label} Flag`} />
                        <span>{currentLang.label}</span>
                        <img src="/images/partials/arrow.svg" className="flag-arrow" alt="arrow" />
                    </>
                )}
            </div>

            {showLangDropdown && (
                <div className="lang-dropdown">
                    {langs.map(lang => (
                        <div key={lang.code} className="lang-option flex-center">
                            <img src={lang.image} alt={`${lang.label} Flag`} />
                            <a href={lang.link}>{lang.label}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
