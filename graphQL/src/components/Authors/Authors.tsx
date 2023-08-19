import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../api/Queries";
import { Author } from "../../types/AuthorType";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS);
  const authors = data?.authors;
  const navigate = useNavigate();

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
      </ul><br/>
      <button onClick={()=>navigate('addAuthor')}>Go to Add Authors</button>
    </div>
  );
};

export default Authors;
