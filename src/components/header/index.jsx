import { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import RightSide from './RightSide';
import './header.css';

export default function Header({ headerData }) {
  const [navbarIsActive, setNavbarIsActive] = useState(false);

  const currencyList = [
    { id: 1, title: '$ USD', code: 'en' },
    { id: 2, title: '€ EUR', code: null },
    { id: 3, title: '₽ RUB', code: 'ru' },
    { id: 4, title: '֏ AMD', code: 'am' },
  ];

  return (
    <header>
      <div className="wrapper">
        <div className="row flex-between">
          <Logo logo={headerData.logo} />

          <Navbar
            navbar={headerData.navbar}
            navbarIsActive={navbarIsActive}
            setNavbarIsActive={setNavbarIsActive}
          />

          <RightSide
            btns={headerData.btns}
            langs={headerData.langs}
            navbarIsActive={navbarIsActive}
            setNavbarIsActive={setNavbarIsActive}
          />
        </div>
      </div>
    </header>
  );
}