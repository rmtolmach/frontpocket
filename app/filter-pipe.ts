import {Pipe} from "angular2/core";

@Pipe ({
  name: "my_filter"
})

export class FilterPipe{
  transform(value){
    console.log(value);
    if (value) {
      return value.filter((game)=> game.name.startsWith('P'));
    }
  }
}
