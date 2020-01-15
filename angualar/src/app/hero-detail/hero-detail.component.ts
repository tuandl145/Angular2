import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Class/Hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }
  optionNumber = {
    allowDecimalPadding: false,
    decimalPlaces: 0,
    minimumValue: 0,
    maximumValue: 2147483647,
    emptyInputBehavior: "null",

  };
  myModel=1000;
  myOptions = {
    digitGroupSeparator: '.',
    decimalCharacter: ',',
    decimalCharacterAlternative: '.',
    currencySymbol: '\u00a0€',
    currencySymbolPlacement: 's',
    roundingMethod: 'U',
    minimumValue: '0'
  }
}
