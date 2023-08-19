import { useMutation, useQuery } from "@apollo/client";
import { GET_GAMES, GET_GAME_BY_ID } from "../../api/Queries";
import { useEffect, useState } from "react";
import { Game } from "../../types/GameType";
import { useNavigate } from "react-router-dom";
import { DEL_GAME } from "../../api/Mutations";

const Games = () => {
  const { data, loading, error } = useQuery(GET_GAMES);
  const [games, setGames] = useState<Game[]>();
  const [deleteGame] = useMutation(DEL_GAME);

  useEffect(() => {
    if (data?.games) {
      setGames(data.games);
    }
  }, [data]);

  const [gamId, setGamId] = useState<number>();
  console.log("org games",games);

  const navigate = useNavigate();

  const handleDelete = async (gameID: number) => {
    const { data } = await deleteGame({
      variables: {
        deleteGameId: gameID,
      },
    });
    setGames(data?.deleteGame?.updatedGames);
  };

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

  if (loading) return `Loading..`;
  if (error) return `Error :${error}`;

  return (
    <div>
      <h1>List of Games</h1>
      <ol>
        {games?.map((game: Game) => (
          <>
            <li key={game.id} onClick={() => setGamId(game.id)}>
              {game.title}
            </li>
            <br />
            <button onClick={() => handleDelete(Number(game.id))}>
              Delete
            </button>
            <br />
            <br />
          </>
        ))}
      </ol>
      <button onClick={() => navigate("addGame")}>Go to Add Games</button>

      {gameByIdLoading && <p>gamebyid loading...</p>}
      {gameByIdError && <p>{`Error :${gameByIdError}`}</p>}
      {gameById && (
        <div>
          <h1>{gameById?.game?.title}</h1>
          <p>Platforms</p>
          <ul>
            {gameById?.game?.platform.map(
              (platform: string[], index: number) => (
                <li key={index}>{platform}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Games;
