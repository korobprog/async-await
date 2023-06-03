import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const rawString = await json(buffer);
      const data = JSON.parse(rawString);

      const gameSaving = {
        id: data.id,
        created: new Date(data.created),
        userInfo: {
          id: data.userInfo.id,
          name: data.userInfo.name,
          level: data.userInfo.level,
          points: data.userInfo.points,
        },
      };

      return gameSaving;
    } catch (error) {
      // exit with an error if something goes wrong
      throw new Error("Error while parsing the GameSaving file");
    }
  }
}
