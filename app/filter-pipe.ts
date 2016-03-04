import {Pipe} from "angular2/core";

@Pipe ({
  name: "my_filter"
})

export class FilterPipe{
  transform(value, args:string[]){
    console.log(args);
    if (value) {
      if (args[0] === "none") {
        return value.filter((game)=> game.equipment === null);
      }
      return value.filter((game)=> game.equipment === args[0]);
    }
  }
}
