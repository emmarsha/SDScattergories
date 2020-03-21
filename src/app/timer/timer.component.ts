import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// -- Rxjs -- //
import { timer, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  timer = 120;
  timerSubscription = null;

  timerState = 'PAUSED';

  @Output() roundOver: EventEmitter<any> = new EventEmitter();

  startCountdown() {
    if (!this.timerSubscription || this.timerSubscription.isStopped) {
      this.timerState = 'PLAY';

      this.timerSubscription = interval(1000).subscribe(() => {
        this.timer--;

        if (this.timer === 0) {
          this.stopTimer();
          this.roundOver.emit();
        }
      });
    }
  }

  onReset() {
    this.stopTimer();
    this.timer = 120;
  }

  onPause() {
    this.stopTimer();
  }

  stopTimer() {
    this.timerSubscription.unsubscribe();
    this.timerState = 'PAUSED';
  }

}
