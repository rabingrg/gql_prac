import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddGame from "./components/Games/AddGame";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="addGames" element={<AddGame/>}/>
      </Routes>
    </>
  );
};

export default App;
