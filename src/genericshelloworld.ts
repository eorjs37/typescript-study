function identity(arg: number): number {
  return arg;
}

function identity2(arg: any): any {
  return arg;
}

function identity3<T>(arg: T): T {
  return arg;
}

//
let output = identity3<string>('mystring');
//타입 추론 인자 값에 따라 타입이 정해짐
let output2 = identity3('test');

export {};
