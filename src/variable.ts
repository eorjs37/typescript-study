//배열 타입
// 데이터 타입 + [] 형태
let array1 : number[] = [1,2,3]
// 제네릭 배열 타입
let list: Array<number> = [1,2,3]


//튜플
// 요소의 타입과 개수가 고정된 배열을 표현가능.
let x:[string,number];
x = ["1",19];


//열거
//표준 자료형 집합과 사용하면 도움이 될만한 데이터 형
enum Color { Red,Green,Blue}
let c:Color = Color.Blue;

//undefined
let u: undefined = undefined;

//unll
let n: null = null;

let num:number|null = null;

//타입 단언 (Type assertions)
let someVale:any = "this is a string"
let strLength: number = (<string>someVale).length;
//as-문법
let someValue2:any = "this is a string";
let strLength2: number =(someVale as string).length;