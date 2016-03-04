import {Pipe} from "angular2/core";

@Pipe ({
  name: "noise_filter"
})

export class NoisePipe{
  transform(value, args:string[]){
    console.log("these are the args:" + args);
    if (value) {
      if (args[0] === "Outside Voice") {
        return value.filter((game)=> game.noise === true);
      }
      return value.filter((game)=> game.noise === false);
    }
  }
}
