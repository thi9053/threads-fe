import { getClient } from "@/lib/apollo/apollo-client";
import { GetContinentsDocument } from "../graphql/__generated__/graphql";

export const fetchContinents = async () => {
  const { data } = await getClient().query({
    query: GetContinentsDocument,
  });

  return data;
};
