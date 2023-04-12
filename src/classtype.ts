//
interface ClockInteface{
    currentTime:Date;
    setTime(d:Date):void
}

class Clock implements ClockInteface{
    currentTime: Date;

    setTime(d: Date): void {
        this.currentTime = d;
    }
    constructor(h:number,m:number) {
    }

}

