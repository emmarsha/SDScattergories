import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// -- Rxjs -- //
import { timer, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  timeLimit = 200;

  timer = 120;

  timerSubscription = null;

  isPaused = false;

  timerState = 'STOPPED';

  @Output() roundOver: EventEmitter<any> = new EventEmitter();

  startCountdown() {
    if (!this.timerSubscription || this.timerSubscription.isStopped) {
      this.isPaused = false;
      this.timerState = 'STARTED';

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
    this.timer = this.timeLimit;
    this.isPaused = false;
    this.timerState = 'STOPPED';
  }

  onPause() {
    this.stopTimer();
    this.isPaused = true;
    this.timerState = 'PAUSED';
  }

  stopTimer() {
    this.timerSubscription.unsubscribe();
  }

  updateCountdown() {
    this.timer = this.timeLimit;
  }

}
