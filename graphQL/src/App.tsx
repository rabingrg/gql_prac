import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddGame from "./components/Games/AddGame";
import AddAuthor from "./components/Authors/AddAuthor";
import UpdateGame from "./components/Games/UpdateGame";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="addGame" element={<AddGame/>}/>
        <Route path="addAuthor" element={<AddAuthor/>}/>
        <Route path="upateGame/:id" element={<UpdateGame/>}/>
      </Routes>
    </>
  );
};

export default App;
