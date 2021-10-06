var dbUrl = 'xxxx';

export function getData(){
   console.log("Get data from Database");
}

export namespace Db {
   export class Users {
      static getData(): void {
         console.log("Get data from Users");
      }
   }
}
