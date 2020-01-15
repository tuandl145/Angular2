import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  callResponse(item){
    if(item.status){
     return item.data
    }
    else{
      console.log(item.mess)
      return null;
    }
  }
}
