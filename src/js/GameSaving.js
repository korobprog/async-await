export default class GameSaving {
  constructor(data) {
    // принимаем данные в конструкторе
    this.id = data.id;
    this.level = data.level;
    this.score = data.score;
    this.points = data.points;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get level() {
    return this._level;
  }

  set level(value) {
    this._level = value;
  }

  get score() {
    return this._score;
  }

  set score(value) {
    this._score = value;
  }
  get points() {
    return this._points;
  }

  set points(value) {
    this._points = value;
  }
}
