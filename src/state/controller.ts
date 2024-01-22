import { setSecondsLeft } from './game';

export class GameController {
  private static timeCountdown: number | null = null;

  static startCountdown() {
    if (this.timeCountdown !== null) return;
    this.timeCountdown = setInterval(
      () => setSecondsLeft((sec) => Math.max(sec - 1, 0)),
      1000
    );
  }

  static stopCountdown() {
    if (!this.timeCountdown) return;
    clearInterval(this.timeCountdown);
    this.timeCountdown = null;
  }
}
