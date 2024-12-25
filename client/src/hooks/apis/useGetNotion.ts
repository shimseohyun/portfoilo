import { useQuery } from "@tanstack/react-query";

import { getProjects } from "@apis/domains/notion/notion/api";
import { NOTION_QUERY_KEY } from "@apis/domains/notion/notion/query";

export const useGetProjects = () => {
  return useQuery({
    queryKey: [NOTION_QUERY_KEY.PROJECT],
    queryFn: () => getProjects(),
  });
};
