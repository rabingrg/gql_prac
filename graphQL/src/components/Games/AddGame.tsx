import React, { useState } from "react";
import { Game } from "../../types/GameType";
import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../../api/Mutations";

const AddGame = () => {
  const [addGames, { loading, error, reset }] = useMutation(ADD_GAME);
  const [gametitle, setGametitle] = useState<string>("");
  const [gamePlatOrg, setGamePlatOrg] = useState<string>("");
  const [wholeData,setWholeData] = useState<string>();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const gamePlats: string[] = gamePlatOrg
      ?.split(",")
      .map((game) => game.trim());
    const gameData: Game = { title: gametitle, platform: gamePlats };
    console.log("gameData", gameData);
    try {
      const { data } = await addGames({ variables: { game: gameData } });
      console.log("data",data);
      if (data) {
        setWholeData(data?.addGame?.message);
      }else{
        return null
      }
    } catch (err) {
      console.log(`Error in submitting ${err}`);
    }
    reset();
    // console.log("whole data", wholeData);
  };

  if (loading) return "Submitting....";
  if (error) return `Error in submitting : ${error}`;

  return (
    <>
      <div>
        <h1>Add New Game</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGametitle(e.target.value)
              }
              placeholder="Game title"
            />
          </div>
          <div>
            <label>Platform</label>
            <br />
            <input
              type="text"
              name="platform"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGamePlatOrg(e.target.value)
              }
              placeholder="Game platform"
            />
          </div><br/>
          <input type="submit" value="Click" />
        </form>
        {wholeData && <p>{wholeData}</p>}
      </div>
    </>
  );
};

export default AddGame;
