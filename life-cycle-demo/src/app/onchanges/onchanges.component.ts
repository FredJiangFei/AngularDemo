import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css']
})
export class OnchangesComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  message: string = 'ngOnChange';

  oldName: string;
  changeDetected: boolean = false;
  noChangeCount: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }

  ngDoCheck(): void {
    if (this.user.name != this.oldName) {
      this.changeDetected = true;
      console.log(`DoCheck user name change to ${this.user.name} from ${this.oldName}`);
      this.oldName = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount ++;
      console.log(`Docheck: name not change, but DoCheck was called ${this.noChangeCount} times.`)
    }

    this.changeDetected = false;
  }
}
