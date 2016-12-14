import React from "react"

import NewGame from "./NewGame"
import Gallows from "./Gallows"
import UsedLetters from "./UsedLetters"
import WordDisplay from "./WordDisplay"
import GameStatus from "./GameStatus"

export default function Root() {
  return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100%", margin: "0"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <NewGame />
        </div>
        <div style={{display: "flex", flex: "1 1 auto", flexDirection: "column", alignItems: "center"}}>
          <GameStatus />
          <WordDisplay />
          <Gallows />
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <UsedLetters />
        </div>
      </div>
  )
}
