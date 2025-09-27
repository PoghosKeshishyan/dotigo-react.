import { useParams, Link } from "react-router-dom";
import { getKnowledgeBasePageData } from "../api/knowledge-base-page";
import { useEffect, useState } from "react";
import { DISPLAY_LANG } from "../config";
import Loading from "../components/loading";
import "../stylesheets/knowledgeBaseArticle.css";

export function KnowledgeBaseArticle() {
  const { id } = useParams();
  const [oneArticleData, setOneArticleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingData = async () => {
      try {
        const response = await getKnowledgeBasePageData();
        const articleData = response.find((item) => item.id == Number(id));
        setOneArticleData(articleData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadingData();
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    oneArticleData && (
      <div className="KnowledgeBaseArticle wrapper">
        <div className="go_back_pages">
          <Link className="go_page" to={oneArticleData.go_back_route}>
            {oneArticleData.go_back_title}
          </Link>
        </div>
        <h2 className="heading">{oneArticleData.title[DISPLAY_LANG]}</h2>

        {oneArticleData.categories && (
          <ul className="categories_box">
            {oneArticleData.categories.map((item, index) => (
              <li key={index}>
                {item.title[DISPLAY_LANG]}
                <Link to={`/knowledge-base-detail/${item.id}`}>
                  <img
                    className="arrow_right"
                    src="/images/partials/arrow-to-right.svg"
                    alt="arrow"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
}
