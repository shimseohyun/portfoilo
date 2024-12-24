import { getDatabases } from "@apis/domains/notion/api";
import { NOTION_QUERY_KEY } from "@apis/domains/notion/query";
import { useQuery } from "@tanstack/react-query";

export const useGetDatabases = () => {
  return useQuery({
    queryKey: [NOTION_QUERY_KEY.NOTION],
    queryFn: () => getDatabases(),
  });
};
