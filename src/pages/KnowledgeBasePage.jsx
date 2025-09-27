import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getKnowledgeBasePageData,
  getKnowledgeBasePageHeading,
} from "../api/knowledge-base-page";
import "../stylesheets/knowledgeBasePage.css";
import { DISPLAY_LANG } from "../config";
import Loading from "../components/loading";

export function KnowledgeBasePage() {
  const [heading, setHeading] = useState(null);
  const [baseData, setBaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingData = async () => {
      try {
        const heading = await getKnowledgeBasePageHeading();
        setHeading(heading[0]);
        console.log(heading);

        const baseData = await getKnowledgeBasePageData();
        setBaseData(baseData);
        console.log(baseData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadingData();
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    heading &&
    baseData && (
      <div className="KnowledgeBasePage">
        <div className="wrapper">
          <div className="row">
            <h2 className="heading">{heading.title[DISPLAY_LANG]}</h2>

            <div className="container">
              {baseData.map((item) => (
                <div className="inner_box" key={item.id}>
                  <div>
                    <h3 className="title">{item.title[DISPLAY_LANG]}</h3>

                    {item.categories && (
                      <ul>
                        {item.categories.map((elem, index) => (
                          <li className="text" key={index}>
                            {elem.title[DISPLAY_LANG]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Link to={`/knowledge-base/${item.id}`}>
                    <img
                      className="arrow_right"
                      src="/images/partials/arrow-to-right.svg"
                      alt="arrow"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
