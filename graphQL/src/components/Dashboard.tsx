// import React from "react";
import Games from "./Games/Games";
import Authors from "./Authors/Authors";

const Dashboard = () => {
  return (
    <>
      <div>
        <header>
          <h1>GraphQL Testing</h1>
        </header>
        <section>
            <div>
                <Games/>
            </div>
            <div>
                <Authors/>
            </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
