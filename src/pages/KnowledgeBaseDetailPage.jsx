import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getKnowledgeBaseDetailData } from "../api/knowledge-base-page";
import { DISPLAY_LANG } from "../config";
import Loading from "../components/loading";
import "../stylesheets/knowledgeBaseDetailPage.css";

export function KnowledgeBaseDetailPage() {
  const { category_id } = useParams();
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingData = async () => {
      try {
        const response = await getKnowledgeBaseDetailData();
        const setOneId = response.find(
          (item) => item.category_id === Number(category_id)
        );
        setDetailData(setOneId);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadingData();
    window.scrollTo(0, 0);
  }, [category_id]);

  if (isLoading) {
    return <Loading />;
  }
  const onChange = () => {
    navigate(-1);
  };

  return (
    detailData && (
      <div className="KnowledgeBaseDetail wrapper">
        <div className="row">
          <div className="go_back_pages">
            <Link className="go_page" to={detailData.go_back_page}>
              {detailData.go_back_page_title}
            </Link>
            <img src="/images/partials/mingcute_right-line.svg" alt="svg" />
            <button className="go_section" onClick={onChange}>
              {detailData.go_back_section}
            </button>
          </div>
          <h2 className="heading">{detailData.title[DISPLAY_LANG]}</h2>

          <ul className="texts">
            {detailData.sections &&
              detailData.sections
                .filter((section) => section.lang === DISPLAY_LANG)
                .flatMap((section) =>
                  section.texts.map((text, index) => (
                    <li key={`${section.id}-${index}`}>{text}</li>
                  ))
                )}
          </ul>
        </div>
      </div>
    )
  );
}
