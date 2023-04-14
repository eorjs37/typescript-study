interface ClockConstructor{
    //클래스의 인스턴스를 다루기 때문이다. 인터페이스에서 new로 만든건 클래스의 인스턴스가 아니다.
    new (hour:number, minute:number) :ClockInterface;
}
interface ClockInterface{
    tick():void
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
    return new ctor(hour,minute);
}

class DigitalClock implements ClockInterface{
    tick(): void {
        console.log("beep beep")
    }

}

class AnalogClock implements ClockInterface{
    tick(): void {
        console.log("tick tick")
    }
}

let digital = createClock(DigitalClock,12,17)
let analog = createClock(AnalogClock,7,32);

class Clock implements  ClockInterface{
    tick(): void {
    }
}

export {}