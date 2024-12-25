import { postResponse } from "@apis/instance";
import { Project } from "@models/Project";

interface GetProjectsResponse {
  results: Project[];
}

export const getProjects = async () => {
  const response = await postResponse<GetProjectsResponse>(
    `/api/notion/projects`
  );

  return response?.results;
};
