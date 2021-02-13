import { Component, Input, OnInit } from '@angular/core';
import { Mask } from '../model/mask';

@Component({
  selector: 'app-mask-card',
  templateUrl: './mask-card.component.html',
  styleUrls: ['./mask-card.component.scss']
})
export class MaskCardComponent implements OnInit {

  @Input() currentMask: Mask = new Mask;

  constructor() {
    console.log(this.currentMask.name)
   }

  ngOnInit(): void {
  }

}
