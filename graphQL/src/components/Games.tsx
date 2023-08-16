import { useQuery } from "@apollo/client";
import { GET_GAMES } from "../api/Queries";
import { useEffect, useState } from "react";
import { Game } from "../types/GameType";

const Games = () => {
  const { data, loading, error } = useQuery(GET_GAMES);
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    setGames(data?.games);
  }, []);
  if (loading) return `Loading..`;
  if (error) return `Error :${error}`;

  console.log("games", games);

  return (
    <div>
        <h1>List of Games</h1>
      <ul>
        {games.map((game)=>(<li key={game.id}>{game.title}</li>))}
      </ul>
    </div>
  );
};

export default Games;
