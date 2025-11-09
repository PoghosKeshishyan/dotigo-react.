import { DISPLAY_LANG } from '../../config';
import { Link, useNavigate } from "react-router-dom";
import CurrencyDropdown from "./CurrencyDropdown";
import LangDropdown from "./LangDropdown";

export default function RightSide({ btns, langs, navbarIsActive, setNavbarIsActive }) {
    const navigate = useNavigate();

    return (
        <div className="right-side flex-center">
            <div className="account-buttons flex-center">
                {btns.map(elem => (
                    <Link to={elem.link} key={elem.id} className="btn">
                        {elem.label[DISPLAY_LANG]}
                    </Link>
                ))}
            </div>

            <LangDropdown langs={langs} />
            <CurrencyDropdown />

            <div className="icons">
                <img src="/images/partials/auth-icon.svg" alt="auth" className="auth-icon" onClick={() => navigate('/login')} />

                <img 
                  alt="menubar" 
                  className="menubar-icon"
                  src={navbarIsActive ? "/images/partials/xmark.svg" : "/images/partials/menubar.svg"}
                  onClick={() => setNavbarIsActive(prev => !prev)}
                />
            </div>
        </div>
    );
}