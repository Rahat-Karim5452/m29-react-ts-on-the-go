import { Suspense } from "react";
import "./App.css";
import type CountryType from "./type";
import Countries from "./components/Countries/Countries";

//Step -1 : Create a Promise to load data
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h2> World on the go...</h2>
      <Suspense fallback={<div>Nadir Loading...</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  );
}

export default App;
