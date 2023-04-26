import React, { useState } from "react";
import { GET_COUNTRY_DATA } from "../queries"
import {
  useQuery,
} from "@apollo/client";
import Map from "../components/Map";
import CountryDetails from "@/components/CountryDetails";


function HomePage() {
  const [countryCode, setActiveCountryCode] = useState<string | undefined>(
    'US'
  );

  const { loading, error, data = {} } = useQuery(GET_COUNTRY_DATA, {
    variables: { code: countryCode },
    skip: !countryCode,
  });

  //TODO this looks like something that could be done better 
  const { countries = [{}] } = data;
  const { capital, currency, languages = [], name} = countries[0];

  return (
    <div className="mx-auto max-w-screen-lg w-full">
      <Map setActiveCountryCode={setActiveCountryCode} />
      {countryCode && ( 
        <CountryDetails  
          capital={capital}
          currency={currency}
          languages={languages}
          name={name} 
          countryCode={countryCode} 
        />) }
    </div>
  );
}

export { HomePage }

export default function App() {
  return (
    <HomePage />
  );
}
