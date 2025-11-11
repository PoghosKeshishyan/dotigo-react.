import { DISPLAY_LANG } from '../../config';
import { Link, useNavigate } from "react-router-dom";
import CurrencyDropdown from "./CurrencyDropdown";
import LangDropdown from "./LangDropdown";

export default function RightSide({ btns, langs, navbarIsActive, setNavbarIsActive }) {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    return (
        <div className="right-side flex-center">
            {!isLoggedIn && <div className="account-buttons flex-center">
                {btns.map(elem => (
                    <Link to={elem.link} key={elem.id} className="btn">
                        {elem.label[DISPLAY_LANG]}
                    </Link>
                ))}
            </div>}

            <LangDropdown langs={langs} />
            <CurrencyDropdown />

            {
                isLoggedIn && <div className='account-data flex-center'>
                    <div className="account-balance">
                        <span>Balance</span>

                        <div className="balance-content flex-between">
                            <div className="balance">$1000</div>
                            <img src="/images/partials/plus.svg" alt="plus" />
                        </div>
                    </div>

                    <div className="account-settings flex-center">
                        <img src="/images/partials/account-avatar.svg" alt="account-avatar" />
                        <img src="/images/partials/arrow-right.svg" className='arrow' alt="arrow-right" />
                    </div>
                </div>
            }

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