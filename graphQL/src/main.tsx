import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GetContinents from "./components/Continents.tsx";
import PostContinents from "./components/PostContinents.tsx";
import Games from "./components/Games.tsx";
import Authors from "./components/Authors.tsx";

const client = new ApolloClient({
  uri:"http://localhost:4000/",
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      {/* <App /> */}
     {/* <GetContinents/> */}
     <PostContinents/>
     <Games/>
     <Authors/>
    </React.StrictMode>
  </ApolloProvider>
);
