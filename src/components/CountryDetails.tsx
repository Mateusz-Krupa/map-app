import React from "react";

interface ICountryDetails {
  name: string;
  countryCode: string;
  capital: string;
  currency: string;
  languages: { name: string }[];
};

const CountryDetails: React.FC<ICountryDetails> = ({
  name,
  countryCode,
  capital,
  currency,
  languages,
}) => {
  return (
    <ul className="border border-gray-300 divide-y divide-gray-300">
      <li className="px-4 py-3 bg-white">
        <span className="text-lg font-bold">Name: </span>
        <span className="text-xl">{name}</span>
      </li>
      <li className="px-4 py-3 bg-gray-50">
        <span className="text-lg font-bold">Country code: </span>
        <span className="text-xl">{countryCode}</span>
      </li>
      <li className="px-4 py-3 bg-white">
        <span className="text-lg font-bold">Capital: </span>
        <span className="text-xl">{capital}</span>
      </li>
      <li className="px-4 py-3 bg-gray-50">
        <span className="text-lg font-bold">Currency: </span>
        <span className="text-xl">{currency?.replaceAll(",", ", ")}</span>
      </li>
      <li className="px-4 py-3 bg-white">
        <span className="text-lg font-bold">Languages: </span>
        <ul className="list-disc list-inside ml-4">
          {languages.map((lang, index) => (
            <li key={index} className="text-xl">
              {lang.name}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default CountryDetails;