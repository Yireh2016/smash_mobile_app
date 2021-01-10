class SmashTimer {
  time: number;
  timerRef: NodeJS.Timeout;
  onTickRef: NodeJS.Timeout;
  onFinished: () => boolean;
  onTick?: () => void;

  constructor(onFinished: () => boolean, time?: number, onTick?: () => void) {
    this.time = time || 15;
    this.onFinished = onFinished;
    this.onTick = onTick;
    this.timerRef = setTimeout(() => {}, 0);
    this.onTickRef = setTimeout(() => {}, 0);
  }

  start() {
    this.timerRef = setTimeout(() => {
      const restartTimer = this.onFinished();
      if (restartTimer) {
        this.stop();
        this.start();
        return;
      }
      this.stop();
    }, this.time * 1000);
  }
  tick() {
    this.onTickRef = setInterval(() => {
      this.onTick && this.onTick();
    }, 1000);
  }

  stop() {
    clearTimeout(this.timerRef);
    clearInterval(this.onTickRef);
  }
}

export default SmashTimer;
