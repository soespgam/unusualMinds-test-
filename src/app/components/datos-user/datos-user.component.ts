import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-user',
  templateUrl: './datos-user.component.html',
  styleUrls: ['./datos-user.component.scss']
})
export class DatosUserComponent implements OnInit {

  @Input() dato1:any;  

  constructor() { }

  ngOnInit() {
  }

}
