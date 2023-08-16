import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../api/Queries";
import { useEffect, useState } from "react";
import { ContinentType } from "../types/ContinentType";

const GetContinents = () => {
  const { data, error, loading } = useQuery(GET_CONTINENTS);
  const [continents, setContinents] = useState<ContinentType[]>([]);

  useEffect(() => {
    setContinents(data.continents);
  }, []);

  console.log("conts", continents);

  if (loading) return `loading...`;
  if (error) return `Error ${error}`;

  return (
    <div>
      <div>
        <h1>List of Continents</h1>
        <ul>
          {continents?.map((conts) => (<>
            <li>{conts.name}</li><br/>
            <li>{conts.countries.map((country)=><li>{country.name}</li>)}</li><br/><br/>
          </>
          ))}
        </ul>
      </div>
      {/* <div>
        <h1>List of </h1>
      </div> */}
    </div>
  );
};

export default GetContinents;
