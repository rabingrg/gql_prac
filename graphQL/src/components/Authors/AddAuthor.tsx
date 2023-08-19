import React, { useState } from "react";
import { Author } from "../../types/AuthorType";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../../api/Mutations";

const AddAuthor = () => {
  const [addAuthor, { loading, error, reset }] = useMutation(ADD_AUTHOR);
  const [authName, setAuthName] = useState<string>();
  const [veri, setVeri] = useState<string>();
  const [resData, setResData] = useState<string>();

  const verifiedAuthor = [
    {
      id: 1,
      label: "True",
      value: "true",
    },
    {
      id: 2,
      label: "False",
      value: "false",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const AuthData: Author = { name: authName, verified: veri === "true" };
    console.log("AuthData", AuthData);
    const { data } = await addAuthor({ variables: { auth: AuthData } });
    // console.log("new auth data",data);
    if (data) {
      setResData(data?.addAuthor?.message);
    } else {
      return null;
    }
    reset();
  };
  // console.log("resData",resData);

  if (loading) return "Submitting....";
  if (error) return `Error in submitting : ${error}`;

  return (
    <>
      <div>
        <h1>Add New Author</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              onChange={(e) => setAuthName(e.target.value)}
              placeholder="Enter author name"
            />
          </div>
          <br />
          <div>
            <label>Is Verified?</label>
            <br />
            <select onChange={(e) => setVeri(e.target.value)}>
              <option value="">Select Verified</option>
              {verifiedAuthor.map((va) => (
                <option value={va.value} key={va.id}>
                  {va.label}
                </option>
              ))}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          {resData && <p>{resData}</p>}
        </form>
      </div>
    </>
  );
};

export default AddAuthor;
