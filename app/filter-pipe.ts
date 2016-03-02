import {Pipe} from "angular2/core";

@Pipe ({
  name: "filter"
})

export class FilterPipe{
  transform(value){
    return value.filter((game)=> game.name.startsWith('P'));
  }
}
