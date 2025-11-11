import { useState } from 'react';
import { DISPLAY_LANG } from '../../config';
import { user_dashboard_data } from '../../db';
import ActiveServices from '../../components/user/dashboard/ActiveServices';
import DomainTransfer from '../../components/user/dashboard/DomainTransfer';
import '../../stylesheets/user/user-dashboard.css';

export default function UserDashboard() {
    const [pageData, setPageData] = useState(user_dashboard_data.filter(e=>e.lang===DISPLAY_LANG)[0]);

    return (
        <div className="UserDashboard wrapper">
            <ActiveServices pageData={pageData} />
            <DomainTransfer pageData={pageData} />
        </div>
    )
}
