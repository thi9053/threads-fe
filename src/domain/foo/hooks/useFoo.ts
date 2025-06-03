import { fooSelectors } from "@/store/slices/foo-slice";
import { useAppStore } from "@/store/index";
import { useQuery } from "@apollo/client";
import { useShallow } from "zustand/shallow";
import {
  GetCountriesQuery,
  GetCountriesQueryVariables,
} from "../graphql/__generated__/graphql";
import { GetCountries } from "../graphql/queries/GetCountries";
import { useEffect } from "react";

export const useFoo = () => {
  const { data, loading, error } = useQuery<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >(GetCountries);
  const { text, setText } = useAppStore(useShallow(fooSelectors));

  useEffect(() => {
    if (data) {
      const random = Math.floor(Math.random() * data.countries.length - 1);
      const countryName =
        data.countries?.[random]?.capital || "Unknown Country";
      setText(countryName);
    }
  }, [data, setText]);

  return { text, loading, error };
};
