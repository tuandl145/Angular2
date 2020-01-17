import { Component, OnInit } from '@angular/core';
import { Hero } from '../Class/Hero';
import { HelloService } from '../Services/Hello.Service';
import { resultResponse } from '../Class/resultResponse';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroselect: Hero;
  private helloService;
  heroes: Hero[];
  hello='Toán tử 1';
  constructor(private HelloService: HelloService) {
      this.helloService=HelloService;

   }

  ngOnInit() {
    this.onLoad();
  }
  onLoad(){
    let result;
    this.helloService.getApiHeroes().subscribe(heroes =>
     this.heroes= this.helloService.callResponse(heroes)
    )
  }
  
  loadMullTiple(){
    return false;
  }
  TimKiem(){
    return 134;
  }
  tinhtien2234(){
    return"";
  }
}
