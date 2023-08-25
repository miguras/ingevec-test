import { Component} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'mostrar-ip',
  templateUrl: './mostrar-ip.component.html',
  styleUrls: ['./mostrar-ip.component.scss']
})

export class MostrarIpComponent {

  constructor(public sharedService: SharedService) {}

}
