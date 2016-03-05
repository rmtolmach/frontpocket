import {Pipe} from "angular2/core";

@Pipe ({
  name: "time_filter"
})

export class TimePipe{
  transform(value, args:string[]){
// if value exists, filter through all of the games, make an array of numbers (between 5 and 15, in this example) and check if the argument passed in from the form (after being turned into an integer) is included in the array.
    if (value) {
      return value.filter((game)=>
        Array.apply(null, Array(16)).map(function (_, i) {return i + 5;}).includes(parseInt(args[0])));
        // return numArray.includes(args[0]););


      // return value.filter((game)=>
      // game.time_range === args[0]);
    }
  }
}
