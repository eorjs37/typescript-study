interface ClockConstructor{
    new (hour:number,minute:number);
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor:ClockConstructor,hour:number, minute:number):ClockInterface{
    return  new ctor(hour,minute)
}
class DigitalClock implements  ClockInterface{
    constructor(h: number, m: number) { }
    tick(): void {
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock,12,17);
let analog = createClock(AnalogClock,7,32)

//오류
// class Clock implements ClockConstructor{
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }



export {}