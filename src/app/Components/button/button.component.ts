import { Component, Input, OnInit } from '@angular/core';

const sound = new Audio();

@Component({
  selector: 'xyz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() text: string = 'undefined';
  @Input() src: string = '../../assets/missing-file.mp3';

  isPlaying: boolean = false;
  duration: any = 0;

  constructor() {

  }

  ngOnInit(): void {

  }

  playSound(){
    sound.src = this.src;
    sound.load();
    sound.play();
  }
}
