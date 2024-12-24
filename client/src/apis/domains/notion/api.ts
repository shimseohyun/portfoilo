import { getResponse } from "@apis/instance";

interface GetDatabasesResponse {
  id: 1;
}

export const getDatabases = async () => {
  const response = await getResponse<GetDatabasesResponse>(`/hello`);
  return response;
};
