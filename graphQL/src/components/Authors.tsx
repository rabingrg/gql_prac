import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_AUTHORS } from "../api/Queries";
import { Author } from "../types/AuthorType";

const Authors = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS);
  const [getAuthors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    setAuthors(data?.authors);
  }, [data]);

  console.log("getAuthors", getAuthors);
  if (loading) return "Authors loading...";
  if (error) return `Errors in Author:${error}`;

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {getAuthors.map((auth) => (
          <li key={auth.id}>{auth.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
