export class UserComments {
    publish: string = 'unpublished';
    key:string;
  constructor(
    public name:string, 
    public email:string, 
    public message:string,
  ){
  }
}

