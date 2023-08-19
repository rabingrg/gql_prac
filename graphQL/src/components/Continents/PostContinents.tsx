import React, { useState } from "react";
import { ContinentType } from "../../types/ContinentType";
// import { ContinentType } from "../types/ContinentType";

const PostContinents = () => {
  const [contName, setContName] = useState<string>("");
  const [contCode, setContCode] = useState<string>('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData:ContinentType[] = [{name:contName,code:contCode}]
    console.log("formData",formData);
    
    // console.log(data);
  };
  return (
    <div>
        <h1>Post Continents</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter cont name"
            onChange={(e) => setContName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter cont code"
            onChange={(e) => setContCode(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostContinents;
