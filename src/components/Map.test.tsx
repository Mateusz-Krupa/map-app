import React from "react";
import { render, screen } from "@testing-library/react";
import Map from "./Map";

describe("Map", () => {

  test("should render loading as component is not rendered", () => {
    render(<Map setActiveCountryCode={() => {}} />);
    expect(screen.getByText("Loading...")).toBeDefined();
  });
  
  //TODO i should add tests for clicking on the map 
});
