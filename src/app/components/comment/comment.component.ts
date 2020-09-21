import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() datoComment: any;
  @Output() DatoForm = new EventEmitter();
  @Output() actionButton = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ver(info) {
    this.DatoForm.emit(info)
  }
  emitButton(){
    this.actionButton.emit();
  }
}
