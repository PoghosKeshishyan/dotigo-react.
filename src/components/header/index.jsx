import { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import RightSide from './RightSide';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header({ headerData }) {
  const [navbarIsActive, setNavbarIsActive] = useState(false);

  return (
    <header>
      <div className="wrapper">
        <div className="row flex-between">
          <Logo logo={headerData.logo} />
          <Link to='/cart'>Link</Link>
          <Navbar navbar={headerData.navbar} navbarIsActive={navbarIsActive} />
          <RightSide btns={headerData.btns} langs={headerData.langs} setNavbarIsActive={setNavbarIsActive} />
        </div>
      </div>
    </header>
  );
}