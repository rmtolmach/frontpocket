import {Pipe} from "angular2/core";

@Pipe ({
  name: "time_filter"
})

export class TimePipe{
  transform(value, args:string[]){
// if value exists, filter through all of the games, make an array of numbers (between the first number in the range (parseInt(game.time_range) and the last numbers in the range) and check if the argument passed in from the form (after being turned into an integer) is included in the array.
    if (value) {
      return value.filter((game)=>
        Array.apply(null, Array(parseInt(game.time_range.slice(-2)))).map(function (_, i) {return i + parseInt(game.time_range);}).includes(parseInt(args[0])));
    }
  }
}
