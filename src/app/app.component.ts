import { Component, Input } from '@angular/core';
import { MaskService } from './service/mask.service';
import { MaskCardComponent } from './mask-card/mask-card.component';
import { Mask } from './model/mask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maszkmester';

  masks: Mask[] = this.mService.masks;

  constructor(private mService: MaskService) {
    console.log(this.masks)
  }

}
