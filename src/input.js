const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  GAMEOVER: 2,
  MENU: 3,
  NEXTLEVEL: 4
};

export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
        case 65:
          game.pacman.moveLeft();
          break;
        case 39:
        case 68:
          game.pacman.moveRight();
          break;
        case 38:
        case 87:
          game.pacman.moveUp();
          break;
        case 40:
        case 83:
          game.pacman.moveDown();
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          if (
            game.gamestate === GAMESTATE.PAUSED ||
            game.gamestate === GAMESTATE.RUNNING
          ) {
            game.togglePause();
          } else {
            game.start();
          }
          break;
        default:
          break;
      }
    });
  }
}
