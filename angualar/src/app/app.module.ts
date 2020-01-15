import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { InMemoryDataService }  from './memoryService/in-memory-data.service';
import { HeroesComponent } from './heroes/heroes.component';
import { MainComponent } from './heroes/main/main.component';
import { HeroComponent } from './main/hero/hero.component';
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroDetailComponent,
    HeroesComponent,
    MainComponent,
    HeroComponent
  ],
  imports: [
    NgAutonumericModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
