export class GameResult {
    constructor(
      public categoryID: number,
      public gameID: number,
      public updateDate: Date,
      public field: string,
      public Points: number
    ) {}
  }