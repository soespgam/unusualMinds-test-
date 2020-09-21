import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss']
})
export class FormCommentComponent implements OnInit {

  @Input() datoName:any;
  @Input() datoBody:any;
  @Input() datoEmail:any;
  @Output() enviaDato = new EventEmitter();
  @Output() buttonAction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeForm(){
    this.enviaDato.emit(
      {
        datoBody: this.datoBody,
        datoName: this.datoName,
        datoEmail:this.datoEmail
      }
    );
  }
  enviaDatosForm(){
    this.buttonAction.emit();
  }
}
