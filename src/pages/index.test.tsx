
import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import HomePage from "./index.page";
import { GET_COUNTRY_DATA } from "@/queries";

const mocks = [
  {
    request: {
      query: GET_COUNTRY_DATA,
      variables: { code: "US" },
    },
    result: {
      data: {
        countries: [
          {
            name: "United States",
            capital: "Washington, D.C.",
            currency: "USD",
            languages: [
              { name: "English" },
            ],
          },
        ],
      },
    },
  },
];

describe("HomePage", () => {

  it("renders the CountryDetails component when countryCode is default", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    await waitFor(() => expect(getByText("United States")));
    expect(getByText("Washington, D.C."));
    expect(getByText("USD"));
    expect(getByText("English"));
  });
  
});
