import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DISPLAY_LANG } from './config';
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import { KnowledgeBasePage } from "./pages/KnowledgeBasePage";
import { KnowledgeBaseArticle } from "./pages/KnowledgeBaseArticle";
import { KnowledgeBaseDetailPage } from "./pages/KnowledgeBaseDetailPage";
import DomainPage from "./pages/DomainPage";
import HostingPage from "./pages/HostingPage";
import VPSPage from "./pages/VPSPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import CartPage from "./pages/CartPage";
import Footer from "./components/footer";
import axios from "./axios";
import CartIcon from "./components/cart-page/CartIcon";

export default function App() {
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const loadingData = async () => {
      const resLogo = await axios.get('global/logo');
      const resNavbar = await axios.get(`header/navbar?lang=${DISPLAY_LANG}`);
      const resLangs = await axios.get('header/languages');
      const resAccountBtns = await axios.get('header/account_btns');
      setHeaderData({ logo: resLogo.data, navbar: resNavbar.data, btns: resAccountBtns.data, langs: resLangs.data });

      const resFooterLabel = await axios.get('footer/footer_labels');
      const resFooterLinks = await axios.get(`footer/footer_links?lang=${DISPLAY_LANG}`);
      setFooterData({ label: resFooterLabel.data, links: resFooterLinks.data });
    };

    loadingData();
  }, []);

  return (
    <div className={`App ${DISPLAY_LANG === 'am' ? 'am-font' : ''}`}>
      {headerData && <Header headerData={headerData} />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/knowledge-base/:id" element={<KnowledgeBaseArticle />} />
          <Route path="/knowledge-base-detail/:category_id" element={<KnowledgeBaseDetailPage />} />
          <Route path="/domain" element={<DomainPage />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/vps" element={<VPSPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      
      <CartIcon />

      {footerData && <Footer footerData={footerData} />}
    </div>
  )
}