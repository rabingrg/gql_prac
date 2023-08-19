import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../api/Queries";
import { Author } from "../../types/AuthorType";

const Authors = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS);
  const authors = data?.authors;

  console.log("getAuthors", authors);
  if (loading) return "Authors loading...";
  if (error) return `Errors in Author:${error}`;

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((auth:Author) => (
          <li key={auth.id}>{auth.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
