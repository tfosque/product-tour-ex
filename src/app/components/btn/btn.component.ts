import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() label: string = '';
  @Output() btnClick = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  clicked(evt: any) {
    console.log('inside the click...');
    this.btnClick.emit(evt)
  }

}
