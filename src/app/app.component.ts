import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  answer = '';
  answerDisplay = '';
  color = 'accent';
  mode = 'indeterminate';
  value = 0;
  bufferValue = 100;

  showProgress = false;
  showAnswer() {
    this.showProgress = true;
    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showProgress = false;
    }, 2000);
  }
}
