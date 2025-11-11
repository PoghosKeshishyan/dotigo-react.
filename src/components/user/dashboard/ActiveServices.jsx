import { Link } from 'react-router-dom';
import './ActiveServices.css';

export default function ActiveServices({ pageData }) {
    return (
        <div className='ActiveServices'>
            <h1 className='heading'>{pageData.page_title}</h1>

            <div className="active-services-list">
                {
                    pageData.services.map(elem => (
                        <Link key={elem.id} to={elem.route} className='flex-between'>
                            {elem.label}
                            <span>2</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
