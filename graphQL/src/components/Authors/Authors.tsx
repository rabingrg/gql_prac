import { useQuery } from "@apollo/client";
import { GET_AUTHORS, GET_AUTHOR_BY_ID } from "../../api/Queries";
import { Author } from "../../types/AuthorType";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Authors = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS);
  const authors = data?.authors;
  const [authId, setAuthId] = useState<string>();
  const { data: authorById } = useQuery(GET_AUTHOR_BY_ID, {
    variables: {
      authorId: authId,
    },
    skip: !authId,
  });

  const navigate = useNavigate();

  console.log("getAuthors", authors);
  if (loading) return "Authors loading...";
  if (error) return `Errors in Author:${error}`;
  console.log("authorById", authorById);

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map((auth: Author) => (
          <li key={auth.id} onClick={() => setAuthId(auth.id)}>
            {auth.name}
          </li>
        ))}
      </ul>
      <br />
      <button onClick={() => navigate("addAuthor")}>Go to Add Authors</button>
      <br />
      {authorById && <h3>{authorById?.author?.name}</h3>}
    </div>
  );
};

export default Authors;
