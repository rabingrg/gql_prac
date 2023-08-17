import { useQuery } from "@apollo/client";
import { GET_GAMES, GET_GAME_BY_ID } from "../api/Queries";
import { useEffect, useState } from "react";
import { Game } from "../types/GameType";

const Games = () => {
  const { data, loading, error } = useQuery(GET_GAMES);
  const [gamId, setGamId] = useState<number>();
  const [games, setGames] = useState<Game[]>([]);
  const {
    data: gameById,
    loading: gameByIdLoading,
    error: gameByIdError,
  } = useQuery(GET_GAME_BY_ID, {
    variables: {
      gameId: gamId,
    },
    skip: !gamId,
  });

  useEffect(() => {
    setGames(data?.games);
  }, [games]);

  if (loading) return `Loading..`;
  if (error) return `Error :${error}`;

  console.log("games", games);
  console.log("gameId", gamId);
  console.log("gameById", gameById);

  return (
    <div>
      <h1>List of Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id} onClick={() => setGamId(game.id)}>
            {game.title}
          </li>
        ))}
      </ul>
      {gameByIdLoading && <p>gamebyid loading...</p>}
      {gameByIdError && <p>{`Error :${gameByIdError}`}</p>}
      {gameById && (
        <div>
          <h1>{gameById?.game?.title}</h1>
          <p>Platforms</p>
          <ul>{gameById?.game?.platform.map((platform:string[],index:number)=><li key={index}>{platform}</li>)}</ul>
        </div>
      )}
    </div>
  );
};

export default Games;
