import { Timestamp } from "rxjs/internal/operators/timestamp";


export class UserComments {
    timestamp = new Timestamp(Date.now(), null)
    publish:boolean = false;
    key:string;
  constructor(
    public name:string, 
    public email:string, 
    public message:string,
    
  ){
  }
}