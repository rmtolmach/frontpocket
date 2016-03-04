// export interface Game {
//   id: number;
//   name: string;
//   description: string;
// }

// The TypeScript compiler generates a public field for each public constructor parameter and assigns the parameter’s value to that field automatically when we create new games. Although I'm not creating new games yet.
export class Game {
  constructor(
    public id: number,
    public name: string,
    public equipment: string,
    public description: string,
    public time_range: string,
    // public num_of_players: string,
    public noise: boolean
  ) {  }
}
