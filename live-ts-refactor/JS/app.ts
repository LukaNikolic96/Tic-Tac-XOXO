import Store from "./store.js";
import type { Player } from "./types";
import View from "./view.js";

const players: Player[] = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
  },
];

function init() {
  const view = new View();
  const store = new Store("game-state-key", players);

  // Current tab state changes
  store.addEventListener("statechange", () => {
    view.render(store.game, store.stats);
  });

  // A different tab state changes
  window.addEventListener("storage", () => {
    console.log("State changed from another Tab");
    view.render(store.game, store.stats);
  });

  // The first load of the document
  view.render(store.game, store.stats);

  view.bindGameResetEvent((event) => {
    store.reset();
  });

  view.binNewRoundEvent((event) => {
    store.newRound();
  });

  view.bindPlayerMoveEvent((square) => {

    const existingMove = store.game.moves.find(
      (move) => move.squareId === +square.id
    );

    if (existingMove) {
      return;
    }

    // Advance to the next state by pushind a move to the moves array
    store.playerMove(+square.id);
  });
}

window.addEventListener("load", init);
