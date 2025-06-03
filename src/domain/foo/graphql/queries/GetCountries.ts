import { gql } from "@apollo/client";

export const GetCountries = gql`
  query GetCountries {
    countries {
      awsRegion
      capital
      emoji
    }
  }
`;
