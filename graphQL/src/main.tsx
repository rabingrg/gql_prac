import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GetContinents from "./components/GetContinents.tsx";
import PostContinents from "./components/PostContinents.tsx";

const client = new ApolloClient({
  uri:"https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      {/* <App /> */}
     <GetContinents/>
     <PostContinents/>
    </React.StrictMode>
  </ApolloProvider>
);
