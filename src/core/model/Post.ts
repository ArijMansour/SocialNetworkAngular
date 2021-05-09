export class Post{
    id! : number;
    Title! : string ;
    Date! : Date;
    Description! : string;   
    
    constructor(id:number, Title:string, Date : Date, Description:string){
        this.id=id;
        this.Title=Title;
        this.Date=Date;
        this.Description=Description;

    }

}