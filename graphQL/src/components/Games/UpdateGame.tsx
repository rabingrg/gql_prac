import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UPDATE_GAME } from "../../api/Mutations";
import { GET_GAME_BY_ID } from "../../api/Queries";

const UpdateGame = () => {
  const [upateGame] = useMutation(UPDATE_GAME);
  const { id } = useParams();
  const {data} = useQuery(GET_GAME_BY_ID,{variables:{
    gameId: id
  }})
  console.log("data by id",data?.game);
  
  const [gameTitle, setGametitle] = useState<string>();
  const [gamePlatOrg, setGamePlatOrg] = useState<string>();

  useEffect(()=>{
    setGametitle(data?.game?.title);
    const arrayOfPlats = data?.game?.platform
    // console.log("arrayOfPlats",arrayOfPlats);
    const stringOfPlats:string = arrayOfPlats?.join(",")
    // console.log("stringOfPlats",stringOfPlats);
    // const finalString = {stringOfPlats}
    setGamePlatOrg(stringOfPlats)
    
  },[data])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gamePlats = gamePlatOrg?.split(",").map((plat) => plat);
    const { data } = await upateGame({
      variables: {
        updateGameId: id,
        upGame: {
          title: gameTitle,
          platform: gamePlats,
        },
      },
    });
    console.log("updating data", data);
    setGametitle('');
    setGamePlatOrg('');

    // console.log("updatedGame", updatedGame);
  };

  return (
    <>
      <div>
        <h1>Edit Game</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={gameTitle}
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
              value={gamePlatOrg}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGamePlatOrg(e.target.value)
              }
              placeholder="Game platform"
            />
          </div>
          <br />
          <input type="submit" value="Click" />
        </form>
        {/* {wholeData && <p>{wholeData}</p>} */}
      </div>
    </>
  );
};

export default UpdateGame;
