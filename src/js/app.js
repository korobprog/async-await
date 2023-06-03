import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving); // do something with the GameSaving object
  })
  .catch((error) => {
    console.log(error); // handle the error if something goes wrong
  });
