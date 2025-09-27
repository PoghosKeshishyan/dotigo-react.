import axios from "../axios";

export const getKnowledgeBasePageHeading = async () => {
  const response = await axios.get(`knowledge/knowledge_base_page_heading`);
  return response.data;
};

export const getKnowledgeBasePageData = async () => {
  const response = await axios.get(`knowledge/knowledge_base_page`);
  return response.data;
};

export const getKnowledgeBaseDetailData = async () => {
  const response = await axios.get(`knowledge/knowledge_base_detail_page`);
  return response.data;
};
