import React from "react";
import { render } from "@testing-library/react";
import CountryDetails from "./CountryDetails";

describe("CountryDetails", () => {

  const mockProps = {
    name: "Country Name",
    countryCode: "CN",
    capital: "Capital City",
    currency: "USD",
    languages: [
      { name: "English" },
      { name: "Spanish" },
    ],
  };

  it("renders all details correctly", () => {
      const { getByText } = render(<CountryDetails {...mockProps} />);
      expect(getByText("Name:"));
      expect(getByText("Country Name"));
      expect(getByText("Country code:"));
      expect(getByText("CN"));
      expect(getByText("Capital:"));
      expect(getByText("Capital City"));
      expect(getByText("Currency:"));
      expect(getByText("USD"));
      expect(getByText("Languages:"));
      expect(getByText("English"));
      expect(getByText("Spanish"));
  });

  it("formats currency correctly", () => {
    const { getByText } = render(<CountryDetails {...mockProps} currency="USD,EUR" />);
    expect(getByText("USD, EUR"));
  });

});