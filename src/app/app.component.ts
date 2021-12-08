import { Location, LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private location: Location, private locationStrategy: LocationStrategy){
    console.log(this.location.path());
    console.log(this.location.prepareExternalUrl('/'));
    console.log(this.locationStrategy.getBaseHref());
  }

  playItems: any[] = [
    {
      groupTitle:'BERLUSCONI',
      sounds:[
        {title:'bubu settete', src: '/assets/sounds/bubu settete.mp3'},
        {title:'svegliatevi', src: '/assets/sounds/svegliatevi.mp3'},
        {title:'ma sei un coglione', src: '/assets/sounds/ma sei coglione.mp3'},
      ]
    },
    {
      groupTitle:'DRAGHI',
      sounds:[
        {title:'fatti li cazzi tua', src: '/assets/sounds/fatti li cazzi tua.mp3'},
        {title:'sono mario draghi', src: '/assets/sounds/sono mario draghi.mp3'},
        {title:'ora pro bonus', src: '/assets/sounds/ora pro bonus.mp3'}
      ]
    },
    {
      groupTitle:'RAZZI',
      sounds:[
        {title:'amicoh caroh', src: '/assets/sounds/amicoh caroh.mp3'},
        {title:'fica', src: '/assets/sounds/fica.mp3'},
        {title:'zoccolo', src: '/assets/sounds/zoccolo.mp3'}
      ]
    },
    {
      groupTitle:'SALVINI',
      sounds:[
        {title:'e quindi', src: '/assets/sounds/e quindi.mp3'},
        {title:'ciumbia', src: '/assets/sounds/ciumbia.mp3'}
      ]
    },
    {
      groupTitle:'ZAIA',
      sounds:[
        {title:'posso dire una roba', src: '/assets/sounds/posso dire una roba.mp3'},
        {title:'ragionateci sopra', src: '/assets/sounds/ragionateci sopra.mp3'},
      ]
    }
  ];
}
