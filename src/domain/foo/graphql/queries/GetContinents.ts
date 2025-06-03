import { gql } from "@apollo/client";

export const GetContinents = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;
