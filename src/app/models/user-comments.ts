export class UserComments {
    publish: string = 'unpublished'
  constructor(
    public name:string, 
    public email:string, 
    public message:string,
  ){
  }
}

