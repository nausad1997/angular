import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'first-char',
  templateUrl: './first-char.component.html',
  styleUrls: ['./first-char.component.scss']
})
export class FirstCharComponent implements OnInit {

  @Input() userName: string;
  @Input() userBg: string;
  @Input() userColor: string;

  public firstChar: string;

  @Output() userNameAppear: EventEmitter<string> =
    new EventEmitter<string>();
  _name: string;

  ngOnInit(): void {
    this._name = this.userName;
    this.firstChar = this.userName[0];

  } // end ngOnInit
  ngOnChanges(changes: SimpleChanges) {

    let change = changes.userName;
    this._name = change.currentValue;
    console.log(this._name);
    this.firstChar = this._name[0];
    console.log(this.firstChar);
 }

  public nameClicked() {
    this.userNameAppear.emit(this._name);
  }

}
