import { gql } from "@apollo/client";

export const GET_COUNTRY_DATA = gql`
  query Country($code: String!) {
    countries(filter: { code: { eq: $code } }) {
      name
      currency
      capital
      languages {
        name
      }
      states {
        name
      }
    }
  }
`;