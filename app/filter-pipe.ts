import {Pipe} from "angular2/core";

@Pipe ({
  name: "my_filter"
})

export class FilterPipe{
  transform(value, args:string[]){
    console.log(args);
    if (value) {
      return value.filter((game)=> game.equipment === args[0]);
    }
  }
}
